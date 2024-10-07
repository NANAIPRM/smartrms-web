import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';
import { authRoutes } from './auth';
import { AuthGuard } from '@guards/auth-guard';

// Lazy load HomePage
const HomePage = lazy(() => import('@pages/home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        ),
      },
      // Uncomment error routes
      // {
      //     path: '401',
      //     element: <Error401Page />,
      // },
      // {
      //     path: '404',
      //     element: <Error404Page />,
      // },
      // {
      //     path: '500',
      //     element: <Error500Page />,
      // },
      // {
      //     path: '*',
      //     element: <Error404Page />,
      // },
    ],
  },
  ...authRoutes,
];
