export class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginButton = page.getByRole('button', { name: 'Login/Signup' }).nth(1);
    this.phoneInput = page.getByRole('textbox', { name: '6789' });
    this.sendOtpButton = page.getByRole('button', { name: 'Get OTP' });
    this.otpChar1 = page.getByRole('textbox', { name: 'Please enter OTP character 1' });
    this.otpChar2 = page.getByRole('textbox', { name: 'Please enter OTP character 2' });
    this.otpChar3 = page.getByRole('textbox', { name: 'Please enter OTP character 3' });
    this.otpChar4 = page.getByRole('textbox', { name: 'Please enter OTP character 4' });
    this.verifyButton = page.getByRole('button', { name: 'Verify' });
    this.loginSuccessToast = page.getByText('Login Successful...');
  }

  async goto() {
    await this.page.goto('/');
    await this.loginButton.click();
  }

  async enterPhone(phone) {
    await this.phoneInput.fill(phone);
  }

  async submitPhone() {
    await this.sendOtpButton.click();
  }

  async enterOtp(otp) {
    const chars = otp.toString().split('');
    await this.otpChar1.fill(chars[0]);
    await this.otpChar2.fill(chars[1]);
    await this.otpChar3.fill(chars[2]);
    await this.otpChar4.fill(chars[3]);
  }

  async submitOtp() {
    await this.verifyButton.click();
  }

  async isLoggedIn() {
    return this.loginSuccessToast.isVisible();
  }

  async login(phone, otp) {
    await this.goto();
    await this.enterPhone(phone);
    await this.submitPhone();
    await this.enterOtp(otp);
    await this.submitOtp();
  }
}
