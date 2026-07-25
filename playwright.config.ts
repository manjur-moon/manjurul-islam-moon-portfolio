import { defineConfig, devices } from "@playwright/test";

const externalBaseUrl = process.env.E2E_BASE_URL?.trim();
export default defineConfig({
  testDir: "./e2e",
  outputDir: "test-results",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    baseURL: externalBaseUrl || "http://127.0.0.1:5173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "tablet-chromium",
      use: { browserName: "chromium", viewport: { width: 820, height: 1180 } },
    },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
  ...(externalBaseUrl
    ? {}
    : {
        webServer: {
          command: "npm run dev -- --host 127.0.0.1",
          url: "http://127.0.0.1:5173",
          reuseExistingServer: !process.env.CI,
          timeout: 120000,
        },
      }),
});
