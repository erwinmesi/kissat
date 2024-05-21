/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        'primary': {
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
          '950': 'var(--color-primary-950)',
          'DEFAULT': 'var(--color-primary)',
          'rgb': 'var(--color-primary-rgb)',
          'contrast': 'var(--color-primary-contrast)',
          'contrast-rgb': 'var(--color-primary-contrast-rgb)',
          'shade': 'var(--color-primary-shade)',
          'tint': 'var(--color-primary-tint)',
          'disabled': 'var(--color-primary-disabled)',
        },
      }
    },
  },

  plugins: [],
}
