export const paths = {
  index: '/',
  auth: {
    login: '/login',
    auth: '/auth',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password/:accessToken',
  },
  notAuthorized: '/401',
  notFound: '/404',
  serverError: '/500',
};
