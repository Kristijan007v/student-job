import { test, expect } from "@playwright/test";

test("should navigate to the sign in page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'About Page' and click on it
  await page.click("text=Sign In");
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/sign-in");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("h1")).toContainText("Sign in");

  await page.screenshot({ path: "screenshot.png", fullPage: true });
});
