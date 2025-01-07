import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				notoJP: ["var(--font-notojp)"],
				merriweather: ["var(--font-merriweather)"],
			},
			colors: {
				primary: { DEFAULT: 'var(--primary)', background: 'var(--primary-bg)' },
				secondary: { DEFAULT: 'var(--secondary)', background: 'var(--secondary-bg)' },
				accent: { DEFAULT: 'var(--accent)', background: 'var(--accent-bg)' },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [],
} satisfies Config;
