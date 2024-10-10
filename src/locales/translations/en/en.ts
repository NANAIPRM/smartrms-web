import contact from '@renderer/locales/tokens/contact';
import auth from 'src/locales/tokens/auth';
import validations from 'src/locales/tokens/validations';

export const en = {
  [auth.userName]: 'Username',
  [auth.userNameOrEmail]: 'USERNAME OR E-MAIL...',
  [auth.password]: 'Password',
  [auth.forgotPassword.forgot]: 'Forgot Password',
  [auth.forgotPassword.sms]: 'SMS',
  [auth.forgotPassword.email]: 'E-mail',
  [auth.forgotPassword.enterMobile]:
    'Please enter your phone number in the SmartRMS system to receive a password.',
  [auth.forgotPassword.enterEmail]:
    'Please enter your email address in the SmartRMS system to receive a password.',
  [auth.forgotPassword.newPassword]: 'Get New Password',
  [auth.signIn]: 'Sign In',
  [auth.copyRight]: '© 2017 - 2024 Sourcecode Co., Ltd All rights reserved.',
  [auth.forgotPassword.referenceCode]:
    'Please wait to receive your password via sms. Your reference code is ',
  [auth.common.ok]: 'Ok',
  [auth.common.success]: 'Action successfully',
  [auth.common.save]: 'save',
  [validations.requiredUserName]: 'Username is required.',
  [validations.requiredPassword]: 'Password is required.',
  [validations.lengthErrorPassword]: 'Password must be at least 4 characters long.',
  [validations.forgotPassword.requiredEmail]: 'E-mail is required.',
  [validations.forgotPassword.requiredMobile]: 'Phone is required.',
  [validations.forgotPassword.formatEmail]: 'E-mail is not valid.',
  [validations.forgotPassword.formatMobile]: 'Phone is not valid.',
  [validations.resetPassword.matchPassword]: 'Passwords do not match',
  [auth.resetPassword.changePassword]: 'Change password',
  [auth.resetPassword.newPassword]: 'New password',
  [auth.resetPassword.confirmNewPassword]: 'Confirm new password',
  [contact.contactUs]: 'Contact us',
  [contact.contact]: 'Contact us',
  [contact.address]: 'Address',
  [contact.map]: 'Map',
};
