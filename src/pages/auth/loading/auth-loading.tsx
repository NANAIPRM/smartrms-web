import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { neutral } from '@renderer/theme/color';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContextType } from '@renderer/context/auth';
import { useAuth } from '@hooks/use_auth';
import { PostVerifyUserToken } from '@renderer/context/auth/auth-provider';

const AuthLoading = () => {
  const location = useLocation();
  const { verifyUserToken } = useAuth<AuthContextType>();

  useEffect(() => {
    const verifyToken = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');

      if (token !== null) {
        const data: PostVerifyUserToken = {
          token: token,
        };
        await verifyUserToken(data);
      }
    };

    verifyToken();
  }, [location.search, verifyUserToken]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'primary.main',
        gap: 14,
      }}
    >
      <img
        src="/assets/logo.svg"
        alt="logo"
        style={{ height: '60px' }}
      />
      <CircularProgress
        size={60}
        color="warning"
      />
      <Typography sx={{ color: neutral[100] }}>Loading ...</Typography>
    </Box>
  );
};

export default AuthLoading;
