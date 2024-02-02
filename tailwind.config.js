/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: { keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateX(0px)' },
        '50%': { transform: 'translateX(1400px)' },
      }
    },
    animation: {
      wiggle: 'wiggle 10s ease-in infinite',
    },
    fontFamily: {
      lib: "'Dancing Script', cursiv", // Adds a new `font-display` class
    }
  },
  plugins: [],
}

}

