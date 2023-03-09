import { Link } from 'react-router-dom'

import { useNewWorkout } from '../../../hooks/useNewWorkout'

import Layout from '../../layouts/Layout'
import Button from '../../ui/Buttons/button'
import Alert from '../../ui/alert/Alert'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import SelectExercises from './SelectExercises'

const NewWorkout = () => {
	const {
		control,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<Layout bgImg='/gigatrain.avif' heading='Create new workout'>
			<div className='wrapper-inner-page'>
				{isSuccess && <Alert text='Workout created' />}
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

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</Layout>
	)
}

export default NewWorkout
