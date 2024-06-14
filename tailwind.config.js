/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		transitionTimingFunction: {
			smooth: 'cubic-bezier(0,.75,.25,1)'
		},
		transitionProperty: {
			width: 'width',
			height: 'height',
			backgroundColor: 'background-color'
		},
		boxShadow: {
			base: '8px 8px 8px 4px black'
		}
	},
	plugins: []
};
