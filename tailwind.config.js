/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "color-gray-500": "#595959",
        "color-gray-700": "#999999",
        "color-gray-900": "#D9D9D9",
        "color-neutral-100": "rgba(255, 255, 255, 1)",
        "color-neutral-600": "rgba(110, 107, 143, 1)",
        "color-neutral-800": "rgba(23, 15, 73, 1)",
        "color-main-bg": "rgba(231, 227, 255, 1)",
        "primary-color": "rgba(74, 58, 255, 1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
