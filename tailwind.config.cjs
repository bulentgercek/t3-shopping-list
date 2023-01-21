/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "bg-screen": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
