import {
  PostForgotPassword as PostForgetPasswordType,
  PostSignIn as PostSignInType,
  PutResetPassword as PutResetPasswordType,
} from '@renderer/context/auth/auth-provider';
import { axiosInstance } from 'src/libs/axios';

export function postSignIn(headers?: object, params?: object, data?: PostSignInType) {
  const url = `/Scusers/login-verify`;
  return axiosInstance({ method: 'post', url, headers, params, data });
}

export function PostForgotPassword(
  headers?: object,
  params?: object,
  data?: PostForgetPasswordType
) {
  const url = `/member/forget-password`;
  return axiosInstance({ method: 'post', url, headers, params, data });
}

export function PutResetPassword(
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
