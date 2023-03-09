import gigaAuth from '/gigaAuth.jpg'

import { useAuthPage } from '../../../hooks/useAuthPage'

import Layout from '../../layouts/Layout'
import Button from '../../ui/Buttons/button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './auth.module.scss'

const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	return (
		<Layout heading='SIGN IN' bgImg={gigaAuth}>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							...register('email', {
								required: 'Email is required!'
							})
						}}
						type='email'
						placeholder='Enter your Email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							...register('password', {
								required: 'password is required!'
							})
						}}
						type='password'
						placeholder='Enter your password'
					/>
					{isLoading && <Loader />}
					<div className={styles.wrapperButton}>
						<Button clickHandler={() => setType('login')}>
							I'm already Giga
						</Button>
						<Button clickHandler={() => setType('register')}>
							Become Giga
						</Button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
