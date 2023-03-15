const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#4EABC2',
				gray: {
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
