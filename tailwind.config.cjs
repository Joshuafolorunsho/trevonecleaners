const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					100: '#4EABC2',
					200: '#D9EDF2',
					300: '#21535F'
				},
				gray: {
					50: '#F7FBFC',
					750: '#93A0A4',
					850: '#485356',
					950: '#1E2324'
				}
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
