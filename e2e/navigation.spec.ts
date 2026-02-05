import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("should highlight active navigation item", async ({
    page,
  }) => {
    await page.goto("/about");
    const aboutLink = page.getByRole("link", {
      name: /about/i,
    });
    await expect(aboutLink).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  test("should be accessible via keyboard", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });
});

test.describe("Theme Toggle", () => {
  test("should toggle between light and dark mode", async ({
    page,
  }) => {
    await page.goto("/");
    const themeToggle = page.getByRole("button", {
      name: /テーマ切り替え|toggle theme/i,
    });

    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      const html = page.locator("html");
      const initialClass = await html.getAttribute("class");

      await themeToggle.click();
      const newClass = await html.getAttribute("class");

      expect(initialClass).not.toBe(newClass);
    }
  });
});
