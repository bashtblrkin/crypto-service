import React, { FC, PropsWithChildren } from 'react'

import { DropDownWrapperProps } from '@/ui/Layout/Header/DropDownWrapper/dropDownWrapper.interface'

import { useOutside } from '@/hooks/useOutside'

import styles from './DropDownWrapper.module.scss'

const DropDownWrapper: FC<PropsWithChildren<DropDownWrapperProps>> = ({
	children,
    clickableElement
}) => {
	const { ref, setIsShow, isShow } = useOutside(false)

    const handleToggleShow = () => {
        setIsShow(!isShow)
    }

	return <div className={styles.wrapper} ref={ref}>
        {clickableElement(handleToggleShow)}
        {isShow && children}
    </div>
}

export default DropDownWrapper
