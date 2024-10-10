import 'src/locales/i18n';
import { FC } from 'react';
import 'src/global.css';

import Routes from './routes';
import { AuthConsumer, AuthProvider } from './context/auth';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SettingsConsumer, SettingsProvider } from './context/settings';
import { createTheme } from 'src/theme';
import { SnackbarProvider } from './context/snakbar/snakbar-provider';
import { SplashScreen } from '@components/splash-screen';

export const App: FC = () => {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <AuthConsumer>
          {(authContext) => (
            <SettingsProvider>
              <SettingsConsumer>
                {(settings) => {
                  if (!settings.isInitialized) {
                    // return null;
                  }

                  const showSlashScreen = !authContext.isInitialized;

                  const theme = createTheme({
                    colorPreset: settings.colorPreset,
                    contrast: settings.contrast,
                    direction: settings.direction,
                    paletteMode: settings.paletteMode,
                    responsiveFontSizes: settings.responsiveFontSizes,
                  });

                  return (
                    <ThemeProvider theme={theme}>
                      <CssBaseline />
                      {showSlashScreen ? <SplashScreen /> : <Routes />}
                    </ThemeProvider>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    </SnackbarProvider>
  );
};
