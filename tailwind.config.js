/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
    extend: {
      colors: {
        light: "#FFE6E6",
        dark: "#35374B",
        primary: {
          400: "#402B3A",
          300: "#D63484",
          200: "#FF9BD2",
          100: "#F8F4EC",
        },
        secondary: {
          400: "#0F1035",
          300: "#365486",
          200: "#7FC7D9",
          100: "#DCF2F1",
        },
      },
    },
  },
  plugins: [],
};
