import { Fragment, lazy, ReactElement, ReactNode } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet, useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { AuthGuard } from '@guards/auth-guard';

// Lazy load HomePage
const HomePage = lazy(() => import('@pages/home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <HomePage />
      </AuthGuard>
    ),
  },
  ...authRoutes,
];

const Routes = ({ wrapper }: { wrapper?: (props: { children: ReactNode }) => ReactElement }) => {
  // useMixpanel()
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
