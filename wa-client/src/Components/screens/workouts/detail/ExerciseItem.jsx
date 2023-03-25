import cn from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './workout.module.scss'

const ExerciseItem = ({ exerciseLog }) => {
	const navigation = useNavigate()
	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.completed
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigation(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={
						import.meta.env.VITE_SERVER_URL +
						exerciseLog.exercise.iconPath
					}
					height='34'
					alt='exercise icon'
					draggable={false}
				></img>
			</button>
		</div>
	)
}

export default ExerciseItem
