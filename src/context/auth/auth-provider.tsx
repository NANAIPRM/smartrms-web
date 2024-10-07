import { FC, ReactNode, useCallback, useEffect, useReducer, useState } from 'react';
import { AuthContext, initialState, State } from './auth-context';
import PropTypes from 'prop-types';
import { PostForgotPassword, postSignIn } from 'src/api/auth';
import { AxiosResponse } from 'axios';

export interface PostSignIn {
  id: string;
  password: string;
}

export interface PostForgotPassword {
  mobile?: string;
  email?: string;
}

enum ActionType {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    accessToken: String | null;
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

type Action = InitializeAction | SignInAction | ForgotPasswordAction;

type Handler = (state: State, action: any) => State;

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, accessToken } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      accessToken,
    };
  },
  SIGN_IN: (state: State, action: SignInAction): State => {
    const { accessToken } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      accessToken,
    };
  },
  FORGOT_PASSWORD: (state: State, action: ForgotPasswordAction): State => {
    const { confirmCode } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      confirmCode,
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
          throw new Error(responseData.resultDescription);
        }

        return responseData.data.userToken;
      } catch (error) {
        throw error;
      }
    },
    [dispatch]
  );

  const forgotPassword = useCallback(
    async (data?: PostForgotPassword): Promise<void> => {
      try {
        const headers = {};
        const params = {};
        const response: AxiosResponse = await PostForgotPassword(headers, params, data);
        const { data: responseData } = response;

        if (responseData.resultCode === '20000') {
          dispatch({
            type: ActionType.FORGOT_PASSWORD,
            payload: {
              confirmCode: response.data.data.confirm,
            },
          });
        } else {
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
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
