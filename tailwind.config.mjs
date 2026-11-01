/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14243A',
          dark: '#0E1A2B',
          light: '#1D3557'
        },
        secondary: {
          DEFAULT: '#1D3557',
          dark: '#14243A',
          light: '#284B77'
        },
        accent: {
          DEFAULT: '#F28C28',
          hover: '#E07B18',
          light: '#FFF4EA'
        },
        surface: {
          white: '#FFFFFF',
          light: '#F4F6F8',
          card: '#FFFFFF'
        },
        content: {
          dark: '#202A35',
          muted: '#697586'
        },
        border: {
          DEFAULT: '#E5E7EB',
          subtle: '#EEF2F6'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(20, 36, 58, 0.05)',
        'card': '0 4px 20px rgba(20, 36, 58, 0.07)',
        'elevated': '0 10px 30px rgba(20, 36, 58, 0.10)',
        'glow-accent': '0 4px 14px rgba(242, 140, 40, 0.35)'
      }
    },
  },
  plugins: [],
}
