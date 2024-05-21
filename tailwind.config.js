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

        'secondary': {
          '50': 'var(--color-secondary-50)',
          '100': 'var(--color-secondary-100)',
          '200': 'var(--color-secondary-200)',
          '300': 'var(--color-secondary-300)',
          '400': 'var(--color-secondary-400)',
          '500': 'var(--color-secondary-500)',
          '600': 'var(--color-secondary-600)',
          '700': 'var(--color-secondary-700)',
          '800': 'var(--color-secondary-800)',
          '900': 'var(--color-secondary-900)',
          '950': 'var(--color-secondary-950)',
          'DEFAULT': 'var(--color-secondary)',
          'rgb': 'var(--color-secondary-rgb)',
          'contrast': 'var(--color-secondary-contrast)',
          'contrast-rgb': 'var(--color-secondary-contrast-rgb)',
          'shade': 'var(--color-secondary-shade)',
          'tint': 'var(--color-secondary-tint)',
          'disabled': 'var(--color-secondary-disabled)',
        },
      },

      fontFamily: {
        'body': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
        ],
      },
    },
  },

  plugins: [],
}

