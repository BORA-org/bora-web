/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      "gilroy-light": ["Gilroy-Light"],
      "gilroy-regular": ["Gilroy-Regular"],
      "gilroy-medium": ["Gilroy-Medium"],
      "gilroy-bold": ["Gilroy-Bold"],
    },
    fontSize: {
      xs: "0.625rem", // 10px
      sm: "0.75rem", // 12px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.625rem", // 26px
      "4/5xl": "2rem", // 32px
      "5xl": "2.375rem", // 38px
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      normal: "1.5",
      loose: "2",
    },
    extend: {
      colors: {
        blue: {
          b1: "#212529",
        },
        green: {
          g1: "#016E1A",
          g2: "#5FE399",
        },
        yellow: {
          y1: "#FFF3C0",
          y2: "#FFEDA0",
          y3: "#FEE780",
          y4: "#FDCF01",
        },
        gray: {
          g1: "#F3F3F3",
          g2: "#D9D9D9",
          g3: "#CBD5E1",
          g4: "#808080",
          g5: "#282828",
          g6: "#C1C1C1",
          g7: "#888888",
          g8: "#88888833",
        },
        white: {
          w1: "#F3F3F1",
          w2: "#FFFFFF",
        },
        black: {
          b1: "#111111",
          b2: "#000000",
        },
        red: {
          r1: "#CF2939",
        },
      },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
