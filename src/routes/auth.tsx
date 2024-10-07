import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

// Lazy load auth pages
const LoginPage = lazy(() => import('@pages/auth/login'));
const ForgotPasswordPage = lazy(() => import('@pages/auth/forgot-password'));
const AuthLoadingPage = lazy(() => import('@pages/auth/auth-loading'));

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
    element: <Outlet />,
    children: [
      {
        path: ':token',
        element: <AuthLoadingPage />,
      },
    ],
  },
];
