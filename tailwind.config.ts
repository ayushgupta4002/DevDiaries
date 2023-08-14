import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    
      'xl': {'max': '1380px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1103px'},
      // => @media (max-width: 1103px) { ... }
      'xllg': {'max': '1146px'},

      'xlg': {'max': '1243px'},

      'mlg': {'max': '1025px'},
      // => @media (max-width: 1103px) { ... }


      'xmd': {'max': '900px'},

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'nm': {'max': '680px'},

      'xnm':{'max':'860px'},

      'sm': {'max': '580px'},

      // => @media (max-width: 639px) { ... }
      'xsml': {'max': '556px'},

      'xsm': {'max': '380px'},
      'xssm': {'max': '340'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
