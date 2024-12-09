tailwind.config = {
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1720px",
        xl: "1280px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      "sans-secondary": ["Oswald", "sans-serif"],
      serif: ["Ovo", "serif"],
    },
    colors: {
      primary: "hsl(var(--primary) / <alpha-value>)",
      secondary: "hsl(var(--secondary) / <alpha-value>)",
      border: "hsl(var(--border) / <alpha-value>)",
      white: "hsl(var(--white) / <alpha-value>)",
    },
    extend: {},
  },
};