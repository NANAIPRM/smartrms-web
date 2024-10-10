import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useMounted } from '@hooks/use-monted';
import { useAuth } from '@hooks/use_auth';
import { AuthContextType } from '@renderer/context/auth';
import { useRouter } from '@hooks/user-router';
import { tokens } from '@renderer/locales/tokens';
import { paths } from '@renderer/paths';
import { PutResetPassword } from '@renderer/context/auth/auth-provider';

interface Values {
  password: string;
  confirmPassword: string;
  submit: null;
}

const getInitialValues = (): Values => {
  return {
    password: '',
    confirmPassword: '',
    submit: null,
  };
};

const validationSchema = () =>
  Yup.object().shape({
    password: Yup.string().min(4, 'lengthErrorPassword').required('requiredPassword'),
    confirmPassword: Yup.string().test('passwords-match', 'passwordsMustMatch', function (value) {
      return this.parent.password === value;
    }),
  });

const ResetPassword = () => {
  const router = useRouter();
  const params = new URLSearchParams(window.location.search);
  const isMounted = useMounted();
  const accessToken = params.get('accessToken');
  const { t } = useTranslation();
  const { resetPassword } = useAuth<AuthContextType>();

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      const data: PutResetPassword = {
        new_password: values.password,
        confirm_new_password: values.confirmPassword,
      };

      try {
        if (accessToken) {
          await resetPassword(accessToken, data);
        }
        if (isMounted()) {
          setTimeout(() => {
            router.push(paths.auth.login);
          }, 1000);
        }
      } catch (err) {
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  return (
    <div>
      <Card elevation={14}>
        <CardContent>
          <Box
            sx={{
              margin: '18px',
              alignItems: { xs: 'center', sm: 'end' },
              display: 'flex',
              justifyContent: 'center',
              flex: '1 1 auto',
              gap: '8px',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Typography
              variant="h5"
              color="primary.main"
            >
              {t(tokens.auth.resetPassword.changePassword)}
            </Typography>
            <img
              src="/assets/smartrms_logo.png"
              style={{ height: '40px' }}
            />
          </Box>

          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Box sx={{ maxWidth: { sm: '100%', lg: '50%' }, mx: 'auto' }}>
              <Stack spacing={3}>
                <Typography
                  color={
                    formik.touched.password && formik.errors.password ? 'error' : 'text.primary'
                  }
                >
                  {t(tokens.auth.resetPassword.newPassword)}
                </Typography>
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  helperText={
                    formik.touched.password && formik.errors.password === 'requiredPassword'
                      ? t(tokens.validations.requiredPassword)
                      : formik.touched.password && formik.errors.password === 'lengthErrorPassword'
                        ? t(tokens.validations.lengthErrorPassword)
                        : ''
                  }
                  fullWidth
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
                <Typography
                  color={
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                      ? 'error'
                      : 'text.primary'
                  }
                >
                  {t(tokens.auth.resetPassword.confirmNewPassword)}
                </Typography>
                <TextField
                  error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword === 'passwordsMustMatch'
                      ? t(tokens.validations.resetPassword.matchPassword)
                      : ''
                  }
                  fullWidth
                  name="confirmPassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.confirmPassword}
                  sx={{
                    '& .MuiInputBase-input::placeholder': { color: 'text.secondary' },
                    '& .MuiFormHelperText-root': { marginLeft: '0' },
                  }}
                />
              </Stack>

              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 2, color: 'white' }}
                type="submit"
                variant="contained"
              >
                {t(tokens.auth.common.save)}
              </Button>
            </Box>
          </form>
        </CardContent>
        <img
          src="/assets/bg_login.png"
          style={{ width: '100%', height: '100px', display: 'block' }}
        />
      </Card>
    </div>
  );
};

export default ResetPassword;
