import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      screens: {
        xss: '280px',
        xs: '320px',
        sm: '480px',
        md: '768px',
        xlg: '870px',
      },
      backgroundImage: {
        "about-us": "url('/assets/images/pattern/about_us.jpg')",
        "hero-back": "url('/assets/images/pattern/hero-pattern.svg')",
        // "back4": "url('/assets/images/pattern/loginBack.png')"
      },
    },
  },
  plugins: [flowbite],
} satisfies Config;
