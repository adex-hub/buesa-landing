/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "buesa-red": "#E73C37",
        "buesa-peach": "#FAECDC",
        "buesa-peach-darker": "#FAE7D2",
        "buesa-cream": "#FFEEEE",
        "buesa-grey": "#736D6E",
        "buesa-black": "#271E20",
        "buesa-blue": "#3281EF",
        "buesa-feature-grey": "#E5EEEE",
        "heading-color": "#322B2B",
        "background-color": "#FAF9F7",
        "department-grey": "#FFEEEE",
        "department-peach": "#FBE3C7",
        "footer-black": "#333333",
      },
      screens: {
        // The sidebar is active from 0 to 855px or 856px
        "sidebar-active": { max: "855px" },
        "sidebar-inactive": { min: "856px" },
      },
    },
  },
  plugins: [],
};
