import React, { FC, forwardRef } from 'react'

import { IField } from '@/ui/Field/field.interface'

import styles from './Field.module.scss'

const Field: FC = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.field}>
				<input type={type} ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'FieldWithRef'

export default Field
