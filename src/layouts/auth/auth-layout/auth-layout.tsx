import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import Typography from '@mui/material/Typography';
import { neutral } from 'src/theme/color';
import { LanguageSwitch } from '../../language-switch';
import { useTranslation } from 'react-i18next';
import { tokens } from '@renderer/locales/tokens';

const TOP_NAV_HEIGHT = 80;
const FOOTER_HEIGHT = 80;

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundImage: 'url("/assets/bg-auth.png")',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '100%',
}));

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <LayoutRoot>
      <Box
        component="header"
        sx={{
          left: 0,
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            px={3}
            sx={{ height: TOP_NAV_HEIGHT }}
          >
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <img
                src="/assets/logo.svg"
                alt="logo"
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flex: '1 1 auto',
          height: `calc(100vh - ${TOP_NAV_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            py: {
              xs: '60px',
              md: '120px',
            },
          }}
        >
          {children}
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          height: FOOTER_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          mt: 'auto',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%', padding: '0 20px' }}
        >
          <Typography sx={{ color: neutral[100] }}>{t(tokens.auth.copyRight)}</Typography>
          <LanguageSwitch />
        </Stack>
      </Box>
    </LayoutRoot>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};
