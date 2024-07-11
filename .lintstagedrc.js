const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{html,css,scss,js,jsx,ts,tsx,cjs,mjs,json,md,mdx,yml,yaml,toml}":
    [
      () => "tsc --incremental false --noEmit",
      buildEslintCommand,
      "prettier --cache --write .",
    ],
};
