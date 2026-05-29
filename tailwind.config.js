/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0A0F1A",
          navy: "#0F1A2B",
          cyan: "#00D9FF",
          neon: "#00FFFF",
          lavender: "#B794F6",
          pink: "#FF10F0",
          ivory: "#BDC4D4",
          buttercream: "#FDFBF7",
        },
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(to right, #00D9FF, #00FFFF)',
        'gradient-lavender': 'linear-gradient(to right, #B794F6, #FF10F0)',
        'gradient-cyber': 'linear-gradient(to right, #00D9FF, #B794F6)',
        'gradient-triple': 'linear-gradient(to right, #00D9FF, #00FFFF, #B794F6)',
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 217, 255, 0.4)',
        'cyan-glow-lg': '0 0 40px rgba(0, 217, 255, 0.6)',
        'neon-glow': '0 0 20px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
