/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '540px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
  }
}
export default config
