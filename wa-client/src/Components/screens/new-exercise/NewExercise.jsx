import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import ExerciseService from '../../../services/exercise/exercise.service'
import Layout from '../../layouts/Layout'
import Button from '../../ui/Buttons/button'
import Alert from '../../ui/alert/Alert'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util.js'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<Layout
			bgImg='/gigatrain.avif'
			heading='Create new exercise'
			backLink='/new-workout'
		>
			<div className='wrapper-inner-page'>
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						type='number'
						register={register}
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${
											import.meta.env.VITE_SERVER_URL
										}${getIconPath(name)}`}
										alt={name}
										className={cn({
											[styles.active]:
												value === getIconPath(name)
										})}
										onClick={() =>
											onChange(getIconPath(name))
										}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</Layout>
	)
}

export default NewExercise
