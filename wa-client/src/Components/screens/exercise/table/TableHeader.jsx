import styles from '../exercise.module.scss'

const TableHeader = data => {
	const tableHeader = ['Previous', 'Weight & Repeat', 'Completed']

	return (
		<div className={styles.row}>
			{tableHeader.map(item => (
				<div key={item}>
					<span>{item}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
