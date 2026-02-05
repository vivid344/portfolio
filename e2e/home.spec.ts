import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Portfolio/i);
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "メインナビゲーション" });
    await expect(nav).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /about/i }).click();
    await expect(page).toHaveURL(/.*about/);
  });

  test("should navigate to works page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /works/i }).click();
    await expect(page).toHaveURL(/.*works/);
  });

  test("should navigate to career page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /career/i }).click();
    await expect(page).toHaveURL(/.*career/);
  });
});
