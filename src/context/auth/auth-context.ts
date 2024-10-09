// auth-context.ts
import { createContext } from 'react';
import {
  PostForgotPassword,
  PostSignIn,
  PostVerifyUserToken,
  PutResetPassword,
} from './auth-provider';
import { UserData } from '@renderer/types/user';

export interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  userData: UserData | null;
  accessToken: String | null;
  confirmCode: String | null;
  expireDate: String | null;
  expireDateAlert: String | null;
}

export const initialState: State = {
  isInitialized: false,
  isAuthenticated: false,
  userData: null,
  accessToken: null,
  confirmCode: null,
  expireDate: null,
  expireDateAlert: null,
};

export interface AuthContextType extends State {
  signIn: (data?: PostSignIn) => Promise<string | null>;
  verifyUserToken: (data?: PostVerifyUserToken) => Promise<void>;
  forgotPassword: (data?: PostForgotPassword) => Promise<void>;
  resetPassword: (accessToken: string, data?: PutResetPassword) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  signIn: async () => null,
  verifyUserToken: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  resetPassword: (accessToken: string) => Promise.resolve(),
});
