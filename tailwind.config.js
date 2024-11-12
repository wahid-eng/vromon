import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
				},
			},
		},
	},
	plugins: [],
};
