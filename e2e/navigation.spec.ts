import { expect, test } from "@playwright/test";
test("home page and section navigation work", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium");
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
});
test("unknown route shows 404", async ({ page }) => {
  await page.goto("/unknown-page");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
