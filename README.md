# Saya Login POC

Playwright proof-of-concept for the happy-path login flow on the Sayacare staging site. Built to demonstrate that QA can run browser tests entirely inside GitHub Codespaces — no local setup required.

---

## What this tests

1. Navigate to `/login`
2. Enter a phone number and submit
3. Enter the OTP and verify
4. Assert the user is logged in

---

## Running in GitHub Codespaces (recommended for QA)

1. Open this repo on GitHub
2. Click **Code → Codespaces → Create codespace on main**
3. Wait ~2 minutes for the container to build and `npm install` to finish
4. In the Codespaces terminal:

```bash
cd saya-login-poc
cp .env.example .env
# Edit .env with the real BASE_URL, TEST_PHONE, and TEST_OTP
npm test
```

The HTML report lands in `playwright-report/`. Screenshots and traces are captured automatically on failure.

---

## Running locally

Requires Node.js 18+.

```bash
cd saya-login-poc
npm install
cp .env.example .env
# Fill in .env
npm test
```

---

## Updating selectors (codegen)

The selectors in `pages/LoginPage.js` are placeholders. To replace them with real ones:

```bash
npx playwright codegen <BASE_URL>
```

Interact with the login flow in the browser that opens. Codegen prints the selectors — copy them into `LoginPage.js`.
