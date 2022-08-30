import React, { FC, PropsWithChildren } from 'react'

import Header from '@/ui/Layout/Header/Header'

import Meta from '@/utils/Meta/Meta'
import { MetaProps } from '@/utils/Meta/meta.interface'

const Layout: FC<PropsWithChildren<MetaProps>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
