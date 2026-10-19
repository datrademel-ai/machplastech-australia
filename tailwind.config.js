/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#13212E',
        ground: '#F4F5F2',
        line: '#DCE0DC',
        muted: '#4A5A66',
        body: '#3A4853',
        teal: { DEFAULT: '#2F7D8C', dark: '#1F5F6B', soft: '#DCEAEC' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans KR"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
