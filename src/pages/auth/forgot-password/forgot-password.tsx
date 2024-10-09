import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, ButtonGroup, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useMounted } from 'src/hooks/use-monted';
import { useRouter } from 'src/hooks/user-router';
import { useAuth } from 'src/hooks/use_auth';
import { AuthContextType } from 'src/context/auth';
import { PostForgotPassword, PostSignIn } from 'src/context/auth/auth-provider';
import { paths } from '@renderer/paths';
import { neutral, warning } from '@renderer/theme/color';
import { SuccessModal } from './components/modals/success-modal';

interface Values {
  email: string;
  isEmail: boolean;
  mobile: string;
  isMobile: boolean;
  submit: null;
}

const getInitialValues = (): Values => {
  return {
    email: '',
    isEmail: false,
    mobile: '',
    isMobile: true,
    submit: null,
  };
};

const validationSchema = () =>
  Yup.object().shape({
    isEmail: Yup.boolean(),
    email: Yup.string().when('isEmail', {
      is: true,
      then: (schema) => schema.required('requiredEmail').email('formatEmail'),
      otherwise: (schema) => schema.nullable(),
    }),
    isMobile: Yup.boolean(),
    mobile: Yup.string().when('isMobile', {
      is: true,
      then: (schema) =>
        schema
          .required('requiredMobile')
          .matches(/^[0-9]+$/, 'formatMobile')
          .length(10, 'formatMobile'),
      otherwise: (schema) => schema.nullable(),
    }),
  });

const ForgotPasswordPage = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { confirmCode, forgotPassword } = useAuth<AuthContextType>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = useState<string>('');
  const [formType, setFormType] = useState<'email' | 'mobile'>('mobile');
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema,
    onSubmit: async (values, helpers): Promise<void> => {
      // Ensure we are always constructing the data object
      const data: PostForgotPassword = values.email
        ? { email: values.email }
        : { mobile: values.mobile };

      try {
        await forgotPassword(data);

        setModalOpen(true);
      } catch (err) {
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  const handleFormTypeChange = (type: 'email' | 'mobile') => {
    setFormType(type);
    formik.resetForm();
    formik.setFieldValue('isEmail', type === 'email');
    formik.setFieldValue('isMobile', type === 'mobile');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    router.push(paths.auth.login);
  };

  return (
    <div>
      <SuccessModal
        open={modalOpen}
        confirmCode={confirmCode}
        onClose={handleCloseModal}
      />
      <Card elevation={14}>
        <CardContent>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <ButtonGroup
              disableElevation
              aria-label="Disabled button group"
              fullWidth
            >
              <Button
                onClick={() => handleFormTypeChange('mobile')}
                fullWidth
                sx={{
                  backgroundColor: formType === 'mobile' ? 'warning.main' : 'transparent',
                  border: `1px solid white`,
                  color: formType === 'mobile' ? neutral[20] : 'text.secondary',
                }}
              >
                {t(tokens.auth.forgotPassword.sms)}
              </Button>
              <Button
                onClick={() => handleFormTypeChange('email')}
                variant={formType === 'email' ? 'contained' : 'outlined'}
                fullWidth
                sx={{
                  backgroundColor: formType === 'email' ? 'warning.main' : 'transparent',
                  border: `1px solid white`,
                  color: formType === 'email' ? neutral[20] : 'text.secondary',
                }}
              >
                {t(tokens.auth.forgotPassword.email)}
              </Button>
            </ButtonGroup>

            <Stack
              spacing={3}
              sx={{ mt: 2 }}
            >
              {formType === 'mobile' && (
                <>
                  <Typography
                    color={
                      formik.touched.mobile && formik.errors.mobile ? 'error' : 'text.secondary'
                    }
                  >
                    {t(tokens.auth.forgotPassword.enterMobile)}
                    <Box
                      component="span"
                      sx={{ color: 'red' }}
                    >
                      {' '}
                      *
                    </Box>
                  </Typography>
                  <TextField
                    error={!!(formik.touched.mobile && formik.errors.mobile)}
                    helperText={
                      formik.touched.mobile && formik.errors.mobile === 'requiredMobile'
                        ? t(tokens.validations.forgotPassword.requiredMobile)
                        : formik.touched.mobile && formik.errors.mobile === 'formatMobile'
                          ? t(tokens.validations.forgotPassword.formatMobile)
                          : ''
                    }
                    fullWidth
                    name="mobile"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="mobile"
                    value={formik.values.mobile}
                    sx={{
                      '& .MuiInputBase-input::placeholder': { color: 'text.secondary' },
                      '& .MuiFormHelperText-root': { marginLeft: '0' },
                    }}
                  />
                </>
              )}
              {formType === 'email' && (
                <>
                  <Typography
                    color={formik.touched.email && formik.errors.email ? 'error' : 'text.secondary'}
                  >
                    {t(tokens.auth.forgotPassword.enterEmail)}
                    <Box
                      component="span"
                      sx={{ color: 'red' }}
                    >
                      {' '}
                      *
                    </Box>
                  </Typography>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    helperText={
                      formik.touched.email && formik.errors.email === 'requiredEmail'
                        ? t(tokens.validations.forgotPassword.requiredEmail)
                        : formik.touched.email && formik.errors.email === 'formatEmail'
                          ? t(tokens.validations.forgotPassword.formatEmail)
                          : ''
                    }
                    fullWidth
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    sx={{
                      '& .MuiInputBase-input::placeholder': { color: 'text.secondary' },
                      '& .MuiFormHelperText-root': { marginLeft: '0' },
                    }}
                  />
                </>
              )}
            </Stack>

            <Button
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              sx={{ mt: 2, bgcolor: warning.main, color: 'white' }}
              type="submit"
              variant="contained"
            >
              {t(tokens.auth.forgotPassword.newPassword)}
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}></Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
