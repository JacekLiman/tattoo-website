/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Oswald",
      secondary: "Raleway",
      tertiary: "Rozha One",
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      animation: {
        down: "down 1s linear forwards",
      },

      keyframes: {
        down: {
          "0%": { transform: "translateY(-80px)" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      colors: {
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/img/hero/bg.jpg')",
        about: "url('/src/assets/img/about/image.png')",
        interview: "url('/src/assets/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/src/assets/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
