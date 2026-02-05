import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading } from "../index";

describe("Heading", () => {
  it("renders children correctly", () => {
    render(<Heading>Test Heading</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Heading",
    );
  });

  it("applies correct styles", () => {
    render(<Heading>Styled Heading</Heading>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-4xl", "font-bold", "text-primary");
  });
});
