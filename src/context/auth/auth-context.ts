// auth-context.ts
import { createContext } from 'react';
import { PostForgotPassword, PostSignIn } from './auth-provider';

export interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  accessToken: String | null;
  confirmCode: String | null;
}

export const initialState: State = {
  isInitialized: false,
  isAuthenticated: false,
  accessToken: null,
  confirmCode: null,
};

export interface AuthContextType extends State {
  signIn: (data?: PostSignIn) => Promise<string | null>;
  forgotPassword: (data?: PostForgotPassword) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  signIn: async () => null,
  forgotPassword: () => Promise.resolve(),
});
