import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useCallback } from 'react';

type Language = 'th' | 'en';

const languages: Record<Language, string> = {
  th: '/assets/flags/flag-th.svg',
  en: '/assets/flags/flag-en.svg',
};

export const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();

  const handleChange = useCallback(
    async (language: Language): Promise<void> => {
      await i18n.changeLanguage(language);
      localStorage.setItem('i18nextLng', language);
    },
    [i18n]
  );

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          aria-label="language-switch"
          onClick={() => handleChange(i18n.language === 'en' ? 'th' : 'en')}
        >
          <Box
            component="div"
            sx={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '50%',
              border: '2px solid white',
            }}
          >
            <img
              src={languages[i18n.language as Language]}
              alt="language flag"
            />
          </Box>
        </IconButton>
      </Tooltip>
    </>
  );
};
