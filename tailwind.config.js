/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "min-1600": "1600px",
        "3xl": "1800px",
        "4xl": "2000px",
      },
      colors: {
        "primary-blue": "#2531B7",
        "primary-violet": "#1A1AFF",
        "secondary-violet": "#2F3FD4",
      },
      fontFamily: {
        belgrano: ["Belgrano", "serif"],
      },
      button: {
        // Define button styles
        primary: {
          backgroundColor: "#YourButtonColor",
          textColor: "#YourTextColor",
          // Add more styles as needed
        },
        secondary: {
          backgroundColor: "#YourSecondaryButtonColor",
          textColor: "#YourSecondaryTextColor",
          // Add more styles as needed
        },
      },
    },
  },
};
