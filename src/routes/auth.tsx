import { AuthLayout } from '@layouts/auth';
import { ResetPasswordLayout } from '@layouts/auth';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load auth pages
const LoginPage = lazy(() => import('@pages/auth/login'));
const ForgotPasswordPage = lazy(() => import('@pages/auth/forgot-password'));
const ResetPasswordPage = lazy(() => import('@pages/auth/reset-password'));
const AuthLoadingPage = lazy(() => import('@pages/auth/loading'));

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: 'forgot-password',
    element: (
      <AuthLayout>
        <ForgotPasswordPage />
      </AuthLayout>
    ),
  },
  {
    path: 'auth',
    element: <AuthLoadingPage />,
  },
  {
    path: 'reset-password',
    element: (
      <ResetPasswordLayout>
        <ResetPasswordPage />
      </ResetPasswordLayout>
    ),
  },
];
