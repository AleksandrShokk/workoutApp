import gigaProfile from '/public/gigaprofile.jpg'
import React from 'react'

import { useWorkout } from '../../../../hooks/useWorkout'

import Layout from '../../../layouts/Layout'
import Alert from '../../../ui/alert/Alert'
import Loader from '../../../ui/loader/Loader'
import styles from '../detail/workout.module.scss'

import WorkoutItem from './WorkoutItem'

const ListWorkouts = () => {
	const { data, mutate, isLoading, isSuccess, isSuccessMutate } = useWorkout()
	return (
		<Layout bgImg={gigaProfile} heading='Workout list'>
			<div className='wrapper-inner-page'>
				{isSuccessMutate && <Alert text='Workout created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem
								key={workout.id}
								workout={workout}
								mutate={mutate}
							/>
						))}
					</div>
				)}
			</div>
		</Layout>
	)
}

export default ListWorkouts
