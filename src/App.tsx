import 'src/locales/i18n';
import { FC } from 'react';
import 'src/global.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { AuthConsumer, AuthProvider } from './context/auth';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SettingsConsumer, SettingsProvider } from './context/settings';
import { createTheme } from 'src/theme';

export const App: FC = () => {
  const element = useRoutes(routes);

  return (
    <>
      <AuthProvider>
        <AuthConsumer>
          {(authContext) => (
            <SettingsProvider>
              <SettingsConsumer>
                {(settings) => {
                  if (!settings.isInitialized) {
                    // return null;
                  }

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
                      {element}
                    </ThemeProvider>
                  );
                }}
              </SettingsConsumer>
            </SettingsProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    </>
  );
};
