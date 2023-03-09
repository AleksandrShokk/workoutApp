import styles from './field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div>
			<input {...register(name)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
