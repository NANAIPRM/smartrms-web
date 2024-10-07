import auth from 'src/locales/tokens/auth';
import validations from 'src/locales/tokens/validations';

export const th = {
  [auth.userName]: 'บัญชีผู้ใช้งาน',
  [auth.userNameOrEmail]: 'บัญชีผู้ใช้งาน หรือ อีเมล',
  [auth.password]: 'รหัสผ่าน',
  [auth.forgotPassword.forgot]: 'ลืมรหัสผ่าน',
  [auth.forgotPassword.sms]: 'เอสเอ็มเอส',
  [auth.forgotPassword.email]: 'อีเมล',
  [auth.forgotPassword.enterMobile]: 'โปรดระบุเบอร์โทรศัพท์ของท่านเพื่อรับรหัสผ่าน',
  [auth.forgotPassword.enterEmail]: 'โปรดระบุอีเมลของท่านเพื่อรับรหัสผ่าน',
  [auth.forgotPassword.newPassword]: 'รับรหัสผ่าน',
  [auth.forgotPassword.referenceCode]: 'กรุณารอรับรหัสผ่านของท่านทาง sms รหัสอ้างอิงคือ ',
  [auth.signIn]: 'เข้าสู่ระบบ',
  [auth.common.ok]: 'Ok',
  [auth.common.success]: 'Action successfully',
  [validations.requiredUserName]: 'กรุณากรอก บัญชีผู้ใช้งาน',
  [validations.requiredPassword]: 'กรุณากรอก รหัสผ่าน',
  [validations.lengthErrorPassword]: 'รหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร',
  [validations.forgotPassword.requiredEmail]: 'กรุณากรอก อีเมล',
  [validations.forgotPassword.requiredMobile]: 'กรุณากรอก เบอร์โทรศัพท์',
  [validations.forgotPassword.formatEmail]: 'อีเมลไม่ถูกต้อง',
  [validations.forgotPassword.formatMobile]: 'เบอร์โทรศัพท์ไม่ถูกต้อง',
};
