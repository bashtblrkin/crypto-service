const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontSize: {
			xs: '0.95rem',
			sm: '1.21rem',
			tiny: '1.27rem',
			base: '1.46rem',
			lg: '1.64rem',
			xl: '1.825rem',
			'2xl': '2.2rem',
			'3xl': '2.7rem',
			'4xl': '3.25rem',
			'5xl': '4.3rem',
			'6xl': '5.8rem',
			'7xl': '7.3rem'
		},
		extend: {
			colors: {
				primary: '#5F3DF7',
				blueShadow: '#5F5DFB'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '300ms'
			}
		},
		fontFamily: {
			bold: ['UbuntuBold', 'sans-serif'],
			regularUbuntu: ['UbuntuRegular', 'sans-serif'],
			regularMontserrat: ['MontserratRegular', 'sans-serif'],
			medium: ['MontserratMedium', 'sans-serif']
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.primary-btn': {
					outline: 'none',
					backgroundColor: '#5F3DF7',
					padding: '2px 10px',
					color: 'white',
					border: '1px solid #5F3DF7',
					fontFamily: 'MontserratMedium',
					fontSize: '1rem',
					borderRadius: '0.25rem',
					'&:hover': {
						background: 'white',
						transition:
							'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
						color: '#5F3DF7'
					}
				},
				'.default-input': {
					outline: 'none',
					height: '40px',
					border: '1px solid transparent',
					borderRadius: '0.25rem',
					boxShadow: '0 4px 6px -1px rgba(95, 61, 247, 0.2)',
					padding: '0 8px',
					width: '100%',
					fontFamily: 'MontserratRegular',
					fontSize: '1rem',
					'&:placeholder': {
						padding: '0'
					},
					'&:focus': {
						boxShadow: '0 4px 6px -1px rgba(95, 61, 247, 0.4)'
					}
				}
			})
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
