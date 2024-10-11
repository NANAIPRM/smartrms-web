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
import { useTranslation } from 'react-i18next';
import { blue } from '@mui/material/colors';
import { LanguageSwitch } from '@layouts/language-switch';
import Link from '@mui/material/Link';

const TOP_NAV_HEIGHT = 50;
const FOOTER_HEIGHT = 50;

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));

interface LayoutProps {
  children: ReactNode;
}

const FooterLinks = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
    <Link
      href="/contact"
      sx={{
        color: neutral[100],
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
        },
      }}
    >
      Contact Us
    </Link>
    <Typography
      component="span"
      sx={{ color: neutral[100], mx: 1 }}
    >
      |
    </Typography>
    <Link
      href="/privacy-policy"
      sx={{
        color: neutral[100],
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
        },
      }}
    >
      Privacy Policy
    </Link>
    <Typography
      component="span"
      sx={{ color: neutral[100], mx: 1 }}
    >
      |
    </Typography>
    <Link
      href="/term-of-service"
      sx={{
        color: neutral[100],
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
        },
      }}
    >
      Term of Service
    </Link>
  </Box>
);

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <LayoutRoot>
      {/* Header Section */}
      <Box
        component="header"
        sx={{
          left: 0,
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          height: `${TOP_NAV_HEIGHT}px`,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: `${TOP_NAV_HEIGHT}px` }}
          >
            <Stack
              alignItems="end"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              sx={{ textDecoration: 'none' }}
            >
              <img
                src="/assets/smartrms_logo.png"
                alt="logo"
                style={{ height: '35px' }}
              />
              <Typography sx={{ color: blue[900], fontWeight: 400, marginLeft: 0 }}>
                v4.0.0
              </Typography>
            </Stack>
            <LanguageSwitch />
          </Stack>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          flex: '1 1 auto',
          bgcolor: blue[50],
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            flex: '1 1 auto',
          }}
        >
          {children}
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          bgcolor: 'primary.main',
          height: `${FOOTER_HEIGHT}px`,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: `${FOOTER_HEIGHT}px` }}
          >
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              sx={{ textDecoration: 'none' }}
            >
              <Typography sx={{ color: neutral[100] }}>
                Developed by SourceCode Co., Ltd. ©2017-2024
              </Typography>
            </Stack>
            <FooterLinks />
          </Stack>
        </Container>
      </Box>
    </LayoutRoot>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
