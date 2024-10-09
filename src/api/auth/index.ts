import {
  PostForgotPassword as PostForgetPasswordType,
  PostSignIn as PostSignInType,
  PostVerifyUserToken as PostVerifyUserTokenType,
  PutResetPassword as PutResetPasswordType,
} from '@renderer/context/auth/auth-provider';
import { axiosInstance } from 'src/libs/axios';

export function postSignIn(headers?: object, params?: object, data?: PostSignInType) {
  const url = `/Scusers/login-verify`;
  return axiosInstance({ method: 'post', url, headers, params, data });
}

export function postForgotPassword(
  headers?: object,
  params?: object,
  data?: PostForgetPasswordType
) {
  const url = `/member/forget-password`;
  return axiosInstance({ method: 'post', url, headers, params, data });
}

export function putResetPassword(
  headers?: object,
  params?: { accessToken: string },
  data?: PutResetPasswordType
) {
  const url = '/Scusers/submit-reset-password';
  return axiosInstance({
    method: 'put',
    url,
    headers,
    params: { accessToken: params?.accessToken },
    data,
  });
}

export function postVerifyUserToken(
  headers?: object,
  params?: object,
  data?: PostVerifyUserTokenType
) {
  const url = `/Scusers/verify-user-token`;
  return axiosInstance({ method: 'post', url, headers, params, data });
}

export function getAccount(
  accountId: number,
  headers?: object,
  params?: {
    access_token: string;
    user_role_id: string;
    uuid: string;
  }
) {
  const url = `/accounts/${accountId}`;

  const requestParams = params || {};

  return axiosInstance({
    method: 'get',
    url,
    headers,
    params: requestParams,
  });
}
