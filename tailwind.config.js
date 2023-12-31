// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors : {
          "orange": "hsl(26, 100%, 55%)",
          "pale-orange": "hsl(25, 100%, 94%)",
          "very-dark-blue": "hsl(220, 13%, 13%)",
          "dark-grayish-blue": "hsl(219, 9%, 45%)",
          "grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
          "white": "hsl(0, 0%, 100%)",
          "black": "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

