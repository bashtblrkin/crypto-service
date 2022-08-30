const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./app/components/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#5F3DF7'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '300ms'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
                '.flex-center-center': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
			})
		})
	]
}
