/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal': 'rgba(36,42,69, 0.90)',
        'white-opacity-15': 'rgba(255,255,255, 0.15)',
        'dark-slate-blue': '#242A45',
        'dark-slate-blue-75': 'rgba(36,42,69, 0.75)',
        'dark-slate-blue-15': 'rgba(36,42,69, 0.15)',
        'blue': '#5267DF',
        'lightgray': 'rgba(73, 93, 207, 0.20)',
        'light-red': '#FA5959',
        'grayish-blue': '#5B6074',
        'white': '#FFF'
      },
      boxShadow: {
        'links': '0px 8px 8px -4px rgba(73, 93, 207, 0.20)',
        'extensions-container': '0px 10px 20px -5px rgba(73, 93, 207, 0.20)',

      },
      backgroundImage: {
        'rectangle-pattern': "url('/assets/rectangle-two.png')"
      },
      backgroundSize: {
        'size-sm': '577px 203px',
        'size-xl': '1000px 352px',  
        'size-lg': '800px 220px'
      },
      backgroundPosition: {
        'first-tab-xl': 'left -550px top 200px', 
        'first-tab-sm': 'left -340px top 50px', 
        'first-tab-lg': 'left -340px top 120px', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.placeholder-color::placeholder': {
          color: 'rgba(36, 42, 69, 0.25)',
        }
      });
    }
  ],
}