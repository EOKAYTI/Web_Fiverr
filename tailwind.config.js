/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    // screens: {
    //   phone: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   ipad: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   pc: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
