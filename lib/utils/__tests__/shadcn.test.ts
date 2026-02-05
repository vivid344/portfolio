import { describe, expect, it } from "vitest";

import { cn } from "../shadcn";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("px-2 py-1", "p-4");
    expect(result).toBe("p-4");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const result = cn("base-class", isActive && "active-class");
    expect(result).toBe("base-class active-class");
  });

  it("handles false conditions", () => {
    const isActive = false;
    const result = cn("base-class", isActive && "active-class");
    expect(result).toBe("base-class");
  });

  it("handles undefined and null values", () => {
    const result = cn("base-class", undefined, null, "another-class");
    expect(result).toBe("base-class another-class");
  });

  it("merges tailwind classes correctly", () => {
    const result = cn("text-red-500", "text-blue-500");
    expect(result).toBe("text-blue-500");
  });

  it("handles array of classes", () => {
    const result = cn(["class-a", "class-b"]);
    expect(result).toBe("class-a class-b");
  });

  it("handles empty input", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
