import {MotionProps, Variants} from 'framer-motion'

const duration = 0.3

export const DROP_DOWN_LEFT_TO_RIGHT_ANIMATION: Variants = {
	open: {
		opacity: 1,
		x: 0,
		visibility: 'visible',
		transition: {
			duration
		}
	},
	closed: {
		opacity: 0,
		x: '-100%',
		visibility: 'hidden',
		transition: {
			duration,
			visibility: {
				delay: duration
			}
		}
	}
}
