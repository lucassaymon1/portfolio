import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
console.log(colors.green)

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'green-dark': colors.green[500],
      'green-light': colors.emerald[600],
      green: colors.green,
      slate: colors.slate,
      emerald: colors.emerald
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        flying: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(30px) translateX(-30px)'},
        },
        up: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-15px)'}
        },
        diagonal: {
          '0%, 100%': {transform: 'translateY(0) translateX(0)'},
          '50%': {transform: 'translateY(-15px) translateX(15px)'}
        },
        right: {
          '0%, 100%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(15px)'}
        }
      },
      animation: {
        flying: 'flying 3s ease-in-out infinite',
        up: 'up 0.4s ease-in-out',
        diagonal: 'diagonal 0.4s ease-in-out',
        right: 'right 0.4s ease-in-out',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
