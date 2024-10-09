import { FC, ReactNode, useCallback, useEffect, useReducer, useState } from 'react';
import { AuthContext, initialState, State } from './auth-context';
import PropTypes from 'prop-types';
import {
  getAccount,
  postForgotPassword,
  postSignIn,
  postVerifyUserToken,
  putResetPassword,
} from 'src/api/auth';
import { AxiosResponse } from 'axios';
import { checkData, checkLogin, fnEncrypt, getUserData } from '@utils/user-data-utils';
import { useSnackbar } from '@hooks/use_snackbar';
import { useRouter } from '@hooks/user-router';
import { paths } from '@renderer/paths';
import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';
import { UserData } from '@renderer/types/user';
import { tokens } from '@renderer/locales/tokens';
import { useTranslation } from 'react-i18next';

export interface PostSignIn {
  id: string;
  password: string;
}

interface Role {
  role_type: number;
}

export interface PostForgotPassword {
  mobile?: string;
  email?: string;
}

export interface PutResetPassword {
  new_password: string;
  confirm_new_password: string;
}

export interface PostVerifyUserToken {
  token: string;
}

enum ActionType {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  VERIFY_USER_TOKEN = 'VERIFY_USER_TOKEN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    userData: UserData | null;
  };
};

type SignInAction = {
  type: ActionType.SIGN_IN;
  payload: {
    accessToken: String | null;
  };
};

type ForgotPasswordAction = {
  type: ActionType.FORGOT_PASSWORD;
  payload: {
    confirmCode: String | null;
  };
};

type ResetPasswordAction = {
  type: ActionType.RESET_PASSWORD;
};

type VerifyUserTokenAction = {
  type: ActionType.VERIFY_USER_TOKEN;
  payload: {
    isAuthenticated: boolean;
    expireDate: String | null;
    expireDateAlert: String | null;
  };
};

type Action =
  | InitializeAction
  | SignInAction
  | VerifyUserTokenAction
  | ForgotPasswordAction
  | ResetPasswordAction;

type Handler = (state: State, action: any) => State;

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, userData } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      userData: null,
    };
  },
  SIGN_IN: (state: State, action: SignInAction): State => {
    const { accessToken } = action.payload;

    return {
      ...state,
      accessToken,
    };
  },
  VERIFY_USER_TOKEN: (state: State, action: VerifyUserTokenAction): State => {
    const { isAuthenticated, expireDate, expireDateAlert } = action.payload;

    return {
      ...state,
      isAuthenticated: isAuthenticated,
      expireDate: expireDate,
      expireDateAlert: expireDateAlert,
    };
  },
  FORGOT_PASSWORD: (state: State, action: ForgotPasswordAction): State => {
    const { confirmCode } = action.payload;

    return {
      ...state,
      confirmCode,
    };
  },

  RESET_PASSWORD: (state: State): State => {
    return {
      ...state,
    };
  },
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const snackbarContext = useSnackbar();
  const router = useRouter();
  const { t } = useTranslation();

  const initialize = useCallback(async (): Promise<void> => {
    try {
      if (!checkLogin()) {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            userData: null,
          },
        });
        localStorage.removeItem('userData');
      } else {
        const userData: UserData | null = getUserData();
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            userData: userData,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = useCallback(
    async (data?: PostSignIn): Promise<string | null> => {
      try {
        const headers = {};
        const params = {};
        const response: AxiosResponse = await postSignIn(headers, params, data);
        const { data: responseData } = response;

        if (responseData.resultCode === '20000' && responseData.data.userToken !== undefined) {
          dispatch({
            type: ActionType.SIGN_IN,
            payload: {
              accessToken: responseData.data.userToken,
            },
          });
        } else {
          snackbarContext.showSnackbar(responseData.resultDescription, 'error');
        }

        return responseData.data.userToken;
      } catch (error) {
        throw error;
      }
    },
    [dispatch]
  );

  const verifyUserToken = useCallback(
    async (data?: PostVerifyUserToken): Promise<void> => {
      try {
        const headers = {};
        const params = {};
        const response: AxiosResponse = await postVerifyUserToken(headers, params, data);
        const { data: responseData } = response;

        if (+responseData.resultCode === 20000) {
          // Encrypt username and password
          responseData.username = fnEncrypt(responseData.username);
          responseData.password = fnEncrypt(responseData.password);

          let isMember = false,
            isAdmin = false,
            isOwner = false,
            isStaff = false,
            isManager = false,
            isSC = false;

          let role: Role | null = null;

          responseData.data.user.userRole.forEach((rowI: Role) => {
            switch (rowI.role_type) {
              case 2:
                isOwner = true;
                role = rowI;
                break;
              case 3:
                isAdmin = true;
                role = rowI;
                break;
              case 4:
                isMember = true;
                break;
              case 5:
                isStaff = true;
                role = role ? (role.role_type === 2 || role.role_type === 6 ? role : rowI) : rowI;
                break;
              case 6:
                isManager = true;
                role = role ? (role.role_type === 2 ? role : rowI) : rowI;
                break;
              case 8:
                isSC = true;
                role = rowI;
                break;
              default:
                break;
            }
          });

          // // Set the determined role
          responseData.data.user.userRole = role;

          // // Save user data and token to localStorage
          localStorage.setItem('userData', JSON.stringify(responseData));
          localStorage.setItem('accessToken', responseData.data.id);

          if (isAdmin || isOwner || isStaff || isManager) {
            snackbarContext.showSnackbar('login_successful', 'success');

            dispatch({
              type: ActionType.VERIFY_USER_TOKEN,
              payload: {
                isAuthenticated: true,
                expireDate: null,
                expireDateAlert: null,
              },
            });

            setTimeout(() => {
              router.push(paths.index);
            }, 1500);

            let uuid = uuidv1();
            const headers = {};

            const params = {
              access_token: responseData.data.id,
              user_role_id: responseData.data.user.userRole.id,
              uuid: uuid,
            };

            const accountId = responseData.data.user.userRole.account_id;

            const response2: AxiosResponse = await getAccount(accountId, headers, params);
            const data2 = response2.data;

            if (checkData(data2.expire_date)) {
              dispatch({
                type: ActionType.VERIFY_USER_TOKEN,
                payload: {
                  isAuthenticated: true,
                  expireDate: moment(data2.expire_date).format(),
                  expireDateAlert: data2.expire_date_alert,
                },
              });
            }
          } else if (isSC) {
            snackbarContext.showSnackbar('สวัสดี User SC', 'success');
            dispatch({
              type: ActionType.VERIFY_USER_TOKEN,
              payload: {
                isAuthenticated: true,
                expireDate: null,
                expireDateAlert: null,
              },
            });
            // Navigate to SC import page
            // setTimeout(() => {
            //   router.navigate(['/sc/import']);
            // }, 1500);
          } else if (isMember) {
            dispatch({
              type: ActionType.VERIFY_USER_TOKEN,
              payload: {
                isAuthenticated: false,
                expireDate: null,
                expireDateAlert: null,
              },
            });
            await localStorage.removeItem('theme');
            await localStorage.removeItem('building_id');
            await localStorage.removeItem('packages');
            await localStorage.removeItem('userData');
            await localStorage.removeItem('accessToken');
            setTimeout(() => {
              snackbarContext.showSnackbar('ผู้เช่าไม่ได้รับสิทธิ์ให้เข้าหน้านี้', 'error');
            }, 1500);
          } else {
            dispatch({
              type: ActionType.VERIFY_USER_TOKEN,
              payload: {
                isAuthenticated: false,
                expireDate: null,
                expireDateAlert: null,
              },
            });
            await localStorage.removeItem('theme');
            await localStorage.removeItem('building_id');
            await localStorage.removeItem('packages');
            await localStorage.removeItem('userData');
            await localStorage.removeItem('accessToken');
            setTimeout(() => {
              snackbarContext.showSnackbar('ผู้เช่าไม่ได้รับสิทธิ์ให้เข้าหน้านี้', 'error');
            }, 1500);
          }
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: ActionType.VERIFY_USER_TOKEN,
          payload: {
            isAuthenticated: false,
            expireDate: null,
            expireDateAlert: null,
          },
        });
        setTimeout(() => {
          localStorage.removeItem('userData');
          router.push(paths.auth.login);
        }, 1500);
      }
    },
    [dispatch]
  );

  const forgotPassword = useCallback(
    async (data?: PostForgotPassword): Promise<void> => {
      try {
        const headers = {};
        const params = {};
        const response: AxiosResponse = await postForgotPassword(headers, params, data);
        const { data: responseData } = response;

        if (responseData.resultCode === '20000') {
          dispatch({
            type: ActionType.FORGOT_PASSWORD,
            payload: {
              confirmCode: response.data.data.confirm,
            },
          });
        } else {
          snackbarContext.showSnackbar(responseData.resultDescription, 'error');
          throw new Error(responseData.resultDescription);
        }
      } catch (error) {
        throw error;
      }
    },
    [dispatch]
  );

  const resetPassword = useCallback(
    async (accessToken: string, data?: PutResetPassword): Promise<void> => {
      try {
        const headers = {};
        const params = {
          accessToken: accessToken,
        };
        const response: AxiosResponse = await putResetPassword(headers, params, data);

        const { data: responseData } = response;
        console.log(responseData);
        if (responseData.resultCode === '20000') {
          dispatch({
            type: ActionType.RESET_PASSWORD,
          });
          snackbarContext.showSnackbar(t(tokens.auth.common.success), 'success');
        } else {
          snackbarContext.showSnackbar(responseData.resultDescription, 'error');
          throw new Error(responseData.resultDescription);
        }
      } catch (error) {
        throw error;
      }
    },
    [dispatch]
  );

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        verifyUserToken,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
