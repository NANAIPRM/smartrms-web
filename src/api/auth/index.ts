import {
  PostForgotPassword as PostForgetPasswordType,
  PostSignIn as PostSignInType,
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
