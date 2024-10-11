import { Fragment, lazy, ReactElement, ReactNode } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet, useRoutes, Navigate } from 'react-router-dom';
import { authRoutes } from './auth';
import { AuthGuard } from '@guards/auth-guard';
import { Layout } from '@layouts/home';

// Lazy load HomePage
const HomePage = lazy(() => import('@pages/home'));
const ContactUsPage = lazy(() => import('@pages/contact'));
const PrivacyPolicyPage = lazy(() => import('@pages/privacy-policy'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: 'home',
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
      },
      {
        index: true,
        element: (
          <Navigate
            to="/home"
            replace
          />
        ),
      },
      {
        path: 'contact',
        element: (
          <Layout>
            <ContactUsPage />
          </Layout>
        ),
      },
      {
        path: 'privacy-policy',
        element: (
          <Layout>
            <PrivacyPolicyPage />
          </Layout>
        ),
      },
    ],
  },
  ...authRoutes,
];

const Routes = ({ wrapper }: { wrapper?: (props: { children: ReactNode }) => ReactElement }) => {
  const Wrapper = wrapper ?? Fragment;
  return (
    <Wrapper>
      <BrowserRoutes />
    </Wrapper>
  );
};

export const BrowserRoutes = () => {
  return useRoutes(routes);
};

export default Routes;
