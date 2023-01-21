/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 100,
  trailingComma: "all",
  proseWrap: "always",
};
