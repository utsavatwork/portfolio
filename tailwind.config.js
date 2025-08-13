/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./dist/**/*.html"
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        // Dark color palette mapped to your charcoal theme
        dark: {
          50: '#F5F5F5',    // --charcoal-text
          100: '#E0E0E0',   // Lighter variant
          200: '#C4C4C4',   // Light variant
          300: '#A8A8A8',   // --charcoal-muted
          400: '#8A8A8A',   // Mid variant
          500: '#6C6C6C',   // Mid-dark variant
          600: '#3A3A3D',   // --charcoal-border
          700: '#2D2D30',   // --charcoal-surface
          800: '#1A1A1C',   // --charcoal-secondary
          900: '#0A0A0B',   // --charcoal-primary
        },
        // Accent color palette (your gold theme)
        accent: {
          300: '#F0D670',   // Lighter gold
          400: '#E6C856',   // --charcoal-accent-light
          500: '#D4AF37',   // --charcoal-accent (primary)
          600: '#B8941F',   // --charcoal-accent-dark
          700: '#9A7A1A',   // Darker variant
          800: '#7C6115',   // Even darker
          900: '#5E4910',   // Darkest
        },
        // Status colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        
        // Glass effect colors
        glass: 'rgba(42, 42, 48, 0.5)',
        'glass-border': 'rgba(168, 168, 168, 0.1)',
      },
      backgroundColor: {
        // Custom background utilities
        'glass': 'rgba(42, 42, 48, 0.5)',
      },
      borderColor: {
        // Custom border utilities
        'glass-border': 'rgba(168, 168, 168, 0.1)',
      },
      boxShadow: {
        // Custom shadows mapped to your CSS variables
        'dark': '0 10px 25px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 20px 40px rgba(0, 0, 0, 0.6)',
        'dark-xl': '0 25px 50px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 1)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 1), 0 0 30px rgba(212, 175, 55, 1)' },
        },
      },
    }
  },
  plugins: [
    // Add form styles plugin (optional)
    require('@tailwindcss/forms')({
      strategy: 'class', // Use class-based strategy
    }),
  ],
};