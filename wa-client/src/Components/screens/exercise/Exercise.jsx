import bgImg from '/public/gigachad.jpg'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'

import { useExerciseLog } from './hooks/useExerciseLog'

import ExerciseLogService from '../../../services/exercise/exercise-log.service'
import stylesLayout from '../../layouts/Layout.module.scss'

import ExerciseLog from './ExerciseLog'
import styles from './exercise.module.scss'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const Exercise = () => {
	const { data, isLoading, isSuccess, getState, onChangeState, toggleTime } =
		useExerciseLog()
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<ExerciseLog
				data={data}
				isLoading={isLoading}
				isSuccess={isSuccess}
			/>
			<div className={styles.wrapper}>
				<TableHeader data={data} />
				{data?.times.map(item => (
					<TableRow
						getState={getState}
						onChangeState={onChangeState}
						toggleTime={toggleTime}
						item={item}
						key={item.id}
					/>
				))}
			</div>
		</div>
	)
}

export default Exercise
