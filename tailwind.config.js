/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        "3xl": "1.750rem",
      },
      colors: {
        black: "#0d0f52",
        gray: {
          DEFAULT: "#F5F7FA",
          800: "#8BA3CB",
          700: "#8687a8",
        },
        green: {
          DEFAULT: "#80CB17",
        },
        blue: {
          DEFAULT: "#343C6A",
        },
      },
    },
  },
  plugins: [],
};
