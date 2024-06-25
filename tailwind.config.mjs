/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {colors: {
      // Inspired by https://colorhunt.co/palette/2b39643482aa6db3b5f9cc7b
      meetup: '#F7931A', // bitcoin
      tech: '#3482AA', 
      misc: '#6DB3B5', 
    },},
	},
	plugins: [],
}
