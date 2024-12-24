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
        xl: "1.375rem",
        "3xl": "1.750rem",
      },
      colors: {
        black: {
          DEFAULT: "#232323",
        },
        warn: "#FF4B4A",
        success: "#41D4A8",
        dim: {
          DEFAULT: "#718EBF",
        },
        gray: {
          DEFAULT: "#F5F7FA",
          500: "#B1B1B1",
          800: "#8BA3CB",
          700: "#8687a8",
        },
        green: {
          DEFAULT: "#80CB17",
        },
        blue: {
          800: "#343C6A",
        },
      },
      width: {
        "calc-100-plus-25": "calc(100% + 25px)",
      },
    },
  },
  plugins: [],
};
