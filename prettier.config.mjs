/** @type {import("prettier").Config} */

const config = {
  printWidth: 60,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: "*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/components/(.*)$",
    "^@/utils/(.*)$",
    "^@/lib/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: [
    "importAssertions",
    "typescript",
    "jsx",
    "decorators-legacy",
  ],
};

export default config;
