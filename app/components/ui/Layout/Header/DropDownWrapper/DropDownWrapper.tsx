import { motion } from 'framer-motion'
import React, { FC, PropsWithChildren } from 'react'

import { DropDownWrapperProps } from '@/ui/Layout/Header/DropDownWrapper/dropDownWrapper.interface'

import { useOutside } from '@/hooks/useOutside'

import { DROP_DOWN_LEFT_TO_RIGHT_ANIMATION } from '@/utils/animation/dropdown'

import styles from './DropDownWrapper.module.scss'

const DropDownWrapper: FC<PropsWithChildren<DropDownWrapperProps>> = ({
	children,
	clickableElement
}) => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const handleToggleShow = () => {
		setIsShow(!isShow)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			{clickableElement(handleToggleShow)}
			{
				<motion.div
					initial="closed"
					animate={isShow ? 'open' : 'closed'}
					variants={DROP_DOWN_LEFT_TO_RIGHT_ANIMATION}
				>
					{children}
				</motion.div>
			}
		</div>
	)
}

export default DropDownWrapper
