import gigaProfile from '/public/gigaprofile.jpg'
import { useMutation, useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import React, { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workouts/workout-log.service'
import WorkoutService from '../../../../services/workouts/workout.service'
import stylesLayout from '../../../layouts/Layout.module.scss'
import Button from '../../../ui/Buttons/button'
import Loader from '../../../ui/loader/Loader'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})
	const navigate = useNavigate()
	const { mutate } = useMutation(
		['complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess() {
				navigate('/workouts')
			}
		}
	)
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('${gigaProfile}')`
			}}
		>
			<HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map(exerciseLog => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</div>
	)
}

export default Workout
