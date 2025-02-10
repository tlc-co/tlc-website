/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "move-1": "move-1 5s ease-in-out infinite",
        "move-2": "move-2 7s ease-in-out infinite",
        "icon-animation": "icon-animation 1s ease-in-out",
      },
      keyframes: {
        "move-1": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(300%, 50%, 0)" },
        },
        "move-2": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(500%, -150%, 0)" },
        },
        "icon-animation": {
          "10%": { transform: "scale(0.9)" },
          "30%, 50%, 70%, 90%": { transform: "rotate(5deg) scale(1.05)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(-5deg) scale(1.05)" },
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      colors: {
        mainOrange: "#E98E1E",
        main: "#000000",
        secondary: "#122EBF",
        background: "#FF8D00",
        after: "#A80000",
        borderColor: "#f0f2ff",
        contactBg: "#F3F7FB",
        iconColor: "#58C4F3",
        blueShades: {
          100: "#003089",
          200: "#00107A",
          300: "#122dbd",
          400: "#58c4f3",
          500: "#00195f",
          600: "#000A3D",
          700: "#102F84",
        },
        grayShades: {
          100: "#1E1E1E",
          200: "#707070",
          300: "#F2F2F2",
          400: "#1A1A1A",
          500: "#A8A8A8",
          600: "#212529",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
