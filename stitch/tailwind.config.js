import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#f2f1ed', dark: '#100f0e' },
        ink: { DEFAULT: '#0f0f0f', dark: '#f3f1ec' },
        card: { DEFAULT: '#ffffff', dark: '#1a1917' },
        line: { DEFAULT: '#e3e1db', dark: '#2b2a26' },
        muted: { DEFAULT: '#57544e', dark: '#98948b' },
        signal: { DEFAULT: '#c4622d', dark: '#e08a52' },
        chip: { DEFAULT: '#ebe9e3', dark: '#232220' },
      },
      fontFamily: {
        archivo: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        signature: ['Lucida Calligraphy', 'Lucida Handwriting', 'cursive'],
      },
      maxWidth: {
        site: '1180px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': '#c4622d',
            a: { '&:hover': { color: '#c4622d' } },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
        invert: {
          css: {
            '--tw-prose-links': '#e08a52',
            a: { '&:hover': { color: '#e08a52' } },
          },
        },
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
    typography,
  ],
}
