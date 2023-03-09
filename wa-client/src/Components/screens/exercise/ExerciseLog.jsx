import stylesLayout from '../../layouts/Layout.module.scss'
import Header from '../../layouts/header/Header'
import Loader from '../../ui/loader/Loader'

import styles from './exercise.module.scss'

const ExerciseLog = ({ data, isSuccess, isLoading }) => {
	return (
		<>
			<Header
				backLink={
					isSuccess ? `/workout/${data.workoutLogId}` : `/workouts`
				}
			/>
			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={
							import.meta.env.VITE_SERVER_URL +
							data.exercise[0].iconPath
						}
						height={34}
						alt='exercise icon'
					/>
					<h1 className={stylesLayout.heading}>
						{data.exercise[0].name}
					</h1>
				</div>
			)}
			{isLoading && <Loader />}
		</>
	)
}

export default ExerciseLog
