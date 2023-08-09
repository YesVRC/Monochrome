const plugin = require('tailwindcss/plugin.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],

	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('@tailwindcss/line-clamp'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
		plugin(function({ addUtilities, addComponents, e, config }) {
			const utilities = {};
					const colors = ['surface','primary','secondary','tertiary','success','warning','error'];
					const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
			 		for (const color of colors){
							utilities[`.neon-${color}`] = {
			 					boxShadow: `0 0 5px rgb(var(--color-${color}-500) / 1), 0 0 20px rgb(var(--color-${color}-700) / 1)`,
			 				};
						utilities[`.neon-text-${color}`] = {
							textShadow: `0 0 5px rgb(var(--color-${color}-500) / 1), 0 0 20px rgb(var(--color-${color}-700) / 1)`,
						};
			 		}
			 		addUtilities(utilities);
		})],
}
