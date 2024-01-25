import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ['./src/**/*.{js,ts,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    theme: ["lofi"],
    darkTheme: "lofi"
  }
}

