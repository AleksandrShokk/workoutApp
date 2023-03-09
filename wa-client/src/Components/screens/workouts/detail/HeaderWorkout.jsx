import React from 'react'

import stylesLayout from '../../../layouts/Layout.module.scss'
import Header from '../../../layouts/header/Header'

import styles from './workout.module.scss'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
		<>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>
						{workoutLog.minutes + ' min.'}{' '}
					</time>
					<h1 className={stylesLayout.heading}>
						{workoutLog.workout.name}
					</h1>
				</div>
			)}
		</>
	)
}

export default HeaderWorkout
