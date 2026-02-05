export const LANGUAGES = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "CSS",
] as const;

export const FRAMEWORKS = [
  "React.js",
  "Next.js",
  "Gatsby.js",
  "Angular",
  "Tailwind CSS",
] as const;

export type Language = (typeof LANGUAGES)[number];
export type Framework = (typeof FRAMEWORKS)[number];
