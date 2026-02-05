import { expect, test } from "@playwright/test";

test.describe("Accessibility", () => {
  test("home page should have proper heading structure", async ({
    page,
  }) => {
    await page.goto("/");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
  });

  test("about page should have proper heading structure", async ({
    page,
  }) => {
    await page.goto("/about");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/about/i);
  });

  test("works page should have proper heading structure", async ({
    page,
  }) => {
    await page.goto("/works");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/works/i);
  });

  test("career page should have proper heading structure", async ({
    page,
  }) => {
    await page.goto("/career");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/career/i);
  });

  test("images should have alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("links should have accessible names", async ({
    page,
  }) => {
    await page.goto("/");
    const links = page.getByRole("link");
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const accessibleName = await link.evaluate((el) => {
        return (
          el.getAttribute("aria-label") ||
          el.textContent?.trim() ||
          ""
        );
      });
      expect(accessibleName.length).toBeGreaterThan(0);
    }
  });
});
