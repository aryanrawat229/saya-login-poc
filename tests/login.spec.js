import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

const PHONE = process.env.TEST_PHONE;
const OTP = process.env.TEST_OTP;

test.describe('Login - happy path', () => {
  test('user can log in with valid phone and OTP', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.enterPhone(PHONE);
    await loginPage.submitPhone();

    // OTP fields should appear after submitting phone
    await expect(loginPage.otpChar1).toBeVisible();

    await loginPage.enterOtp(OTP);
    await loginPage.submitOtp();

    // Confirm successful login
    await expect(loginPage.userGreeting).toBeVisible();
  });
});
