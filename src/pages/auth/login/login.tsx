import Card from '@mui/material/Card';
import { usePageView } from 'src/hooks/use-page-view';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { paths } from 'src/paths';
import { Box, Link, Stack, TextField } from '@mui/material';

import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { warning } from 'src/theme/color';
import { useRouter } from 'src/hooks/user-router';
import { useMounted } from 'src/hooks/use-monted';
import { useAuth } from 'src/hooks/use_auth';
import { AuthContextType } from 'src/context/auth';
import { PostSignIn } from 'src/context/auth/auth-provider';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

interface Values {
  username: string;
  password: string;
  submit: null;
}

const getInitialValues = (): Values => {
  return {
    username: '',
    password: '',
    submit: null,
  };
};

const validationSchema = (t: any) =>
  Yup.object().shape({
    username: Yup.string().required('requiredUserName'),
    password: Yup.string().min(4, 'lengthErrorPassword').required('requiredPassword'),
  });

const LoginPage = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { signIn } = useAuth<AuthContextType>();
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = useState<string>('');
  const { t } = useTranslation();
  const schema = () => validationSchema(t);

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: schema,
    onSubmit: async (values, helpers): Promise<void> => {
      const data: PostSignIn = {
        id: values.username,
        password: values.password,
      };

      try {
        const token = await signIn(data);

        if (isMounted() && token) {
          router.push(paths.auth.auth + `?token=${token}`);
        }
      } catch (err) {
        if (isMounted()) {
          setSnackbarOpen(true);
          setSnackbarMsg(err.message);
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  usePageView();

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
      <Card elevation={14}>
        <CardContent>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Stack spacing={3}>
              <Typography
                color={
                  formik.touched.username && formik.errors.username ? 'error' : 'text.secondary'
                }
              >
                {t(tokens.auth.userName)}
                <Box
                  component="span"
                  sx={{ color: 'red' }}
                >
                  {' '}
                  *
                </Box>
              </Typography>
              <TextField
                error={!!(formik.touched.username && formik.errors.username)}
                helperText={
                  formik.touched.username && formik.errors.username === 'requiredUserName'
                    ? t(tokens.validations.requiredUserName)
                    : ''
                }
                fullWidth
                placeholder={t(tokens.auth.userNameOrEmail)}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="username"
                value={formik.values.username}
                sx={{
                  '& .MuiInputBase-input::placeholder': { color: 'text.secondary' },
                  '& .MuiFormHelperText-root': { marginLeft: '0' },
                }}
              />

              <Typography
                color={
                  formik.touched.password && formik.errors.password ? 'error' : 'text.secondary'
                }
              >
                {t(tokens.auth.password)}
                <Box
                  component="span"
                  sx={{ color: 'red' }}
                >
                  {' '}
                  *
                </Box>
              </Typography>
              <TextField
                error={!!(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={
                  formik.touched.password && formik.errors.password === 'requiredPassword'
                    ? t(tokens.validations.requiredPassword)
                    : formik.touched.password && formik.errors.password === 'lengthErrorPassword'
                      ? t(tokens.validations.lengthErrorPassword)
                      : ''
                }
                placeholder="******"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                sx={{
                  '& .MuiInputBase-input::placeholder': { color: 'text.secondary' },
                  '& .MuiFormHelperText-root': { marginLeft: '0' },
                }}
              />
            </Stack>
            <Stack
              spacing={2}
              marginTop={2}
            >
              <Stack alignItems="end">
                <Link
                  href="/forgot-password"
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {t(tokens.auth.forgotPassword.forgot)}
                </Link>
              </Stack>
            </Stack>
            <Button
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              sx={{ mt: 2, bgcolor: warning.main, color: 'white' }}
              type="submit"
              variant="contained"
            >
              {t(tokens.auth.signIn)}
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}></Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
