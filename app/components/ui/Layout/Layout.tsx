import React, { FC, PropsWithChildren } from 'react'

import Header from '@/ui/Layout/Header/Header'

import Meta from '@/utils/Meta/Meta'
import { MetaProps } from '@/utils/Meta/meta.interface'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<MetaProps>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout
