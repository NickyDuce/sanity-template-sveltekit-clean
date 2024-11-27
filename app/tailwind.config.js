/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Include all Svelte files for Tailwind's purge
    './node_modules/@sanity/ui/dist/**/*.{js,ts}', // For Sanity UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
