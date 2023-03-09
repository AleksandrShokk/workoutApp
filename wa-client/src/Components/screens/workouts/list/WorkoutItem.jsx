import workoutLogService from '../../../../services/workouts/workout-log.service'
import styles from '../detail/workout.module.scss'

const WorkoutItem = ({ workout, mutate }) => {
	return (
		<div className={styles.item} key={workout.id}>
			<button
				aria-label='Create new workout'
				onClick={() => mutate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	)
}

export default WorkoutItem
