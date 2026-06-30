export class LoginPage {
  constructor(page) {
    this.page = page;

    // TODO: replace with real selectors from codegen (npx playwright codegen <BASE_URL>)
    this.phoneInput = page.getByPlaceholder('Enter mobile number');
    this.sendOtpButton = page.getByRole('button', { name: /send otp/i });
    this.otpInput = page.getByPlaceholder('Enter OTP');
    this.verifyButton = page.getByRole('button', { name: /verify/i });
    this.userGreeting = page.getByTestId('user-greeting'); // post-login indicator
  }

  async goto() {
    await this.page.goto('/login');
  }

  async enterPhone(phone) {
    await this.phoneInput.fill(phone);
  }

  async submitPhone() {
    await this.sendOtpButton.click();
  }

  async enterOtp(otp) {
    await this.otpInput.fill(otp);
  }

  async submitOtp() {
    await this.verifyButton.click();
  }

  async isLoggedIn() {
    return this.userGreeting.isVisible();
  }

  // Convenience: full login flow in one call
  async login(phone, otp) {
    await this.goto();
    await this.enterPhone(phone);
    await this.submitPhone();
    await this.enterOtp(otp);
    await this.submitOtp();
  }
}
