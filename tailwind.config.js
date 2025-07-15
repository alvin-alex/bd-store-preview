/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core Palette
        'primary-blue': '#2C4C9C',
        'primary-blue-light': '#5F82C2',
        'primary-blue-dark': '#1F356B',
        'secondary-orange': '#EE6C4D',
        'secondary-orange-light': '#F4917A',
        'secondary-orange-dark': '#C75A3F',
        
        // Accent Palette
        'accent-yellow': '#F1C40F',
        'accent-teal': '#00BFA5',
        'accent-red': '#E63946',
        
        // Neutral Palette
        'neutral-white': '#FFFAFA',
        'neutral-light': '#F5F5F5',
        'neutral-mid': '#D1D1D1',
        'neutral-dark': '#7A7A7A',
        'neutral-black': '#333333',
        
        // Semantic Palette
        'success-teal': '#00BFA5',
        'warning-yellow': '#F1C40F',
        'error-red': '#E63946',
        'info-blue': '#5F82C2',
      },
      fontFamily: {
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2' }],
        'h2': ['36px', { lineHeight: '1.2' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        'h4': ['22px', { lineHeight: '1.3' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'DEFAULT': '4px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '32': '32px',
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
};