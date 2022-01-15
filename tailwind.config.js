module.exports = {
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
