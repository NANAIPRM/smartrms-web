import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/use_auth';
import { useRouter } from 'src/hooks/user-router';
import PropTypes from 'prop-types';
import { paths } from 'src/paths';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [checked, setChecked] = useState<boolean>(false);

  const check = useCallback(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      router.replace(paths.auth.login);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(
    () => {
      check();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};
