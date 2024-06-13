'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Breadcrumb from '@/components/auth/breadcrumb'
import Wrapper from '@/components/auth/wrapper'
import { EmailSVG, PasswordSVG } from '@/components/svg'
import { setUserData } from '@/redux/features/user.slice'
import Link from 'next/link'

const validationSchema = Yup.object({
	username: Yup.string().required('Username is required'),
	password: Yup.string().required('Password is required'),
})

export default function Register() {
	const router = useRouter()
	const dispatch = useDispatch()
	const onSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await axios.post('https://chat-app-production-8ade.up.railway.app/api/auth/login', {
				username: values.username,
				password: values.password,
			})
			if (response.status === 200) {
				dispatch(setUserData(response.data))
				toast.success('Login successful')
				router.push('/chat')
			}
		} catch (error) {
			if (error.response && error.response.data) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Login failed')
			}
			console.log(error.message, 'Error while login')
		}
		setSubmitting(false)
	}
	return (
		<>
			<Breadcrumb title='Sign In' />
			<Wrapper>
				<h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Sign In</h2>
				<Formik
					initialValues={{ username: '', password: '', confirmPassword: '' }}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<div className='mb-4' bis_skin_checked='1'>
								<label className='mb-2.5 block font-medium text-black dark:text-white'>Username</label>
								<div className='relative' bis_skin_checked='1'>
									<Field
										type='text'
										placeholder='Enter username'
										className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
										name='username'
									/>
								</div>
								<ErrorMessage name='username' component='div' className='error' />
							</div>
							<div className='mb-6' bis_skin_checked='1'>
								<label className='mb-2.5 block font-medium text-black dark:text-white'>Password</label>
								<div className='relative' bis_skin_checked='1'>
									<Field
										type='password'
										placeholder='6+ Characters, 1 Capital letter'
										className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10  outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
										name='password'
									/>
									<span className='absolute right-4 top-4'>
										<PasswordSVG />
									</span>
								</div>
								<ErrorMessage name='password' component='div' className='error' />
							</div>
							<div className='mb-5' bis_skin_checked='1'>
								<button
									className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
									type='submit'>
									{isSubmitting ? 'Loading...' : 'Sign In'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
				<div className='mt-6 text-center' bis_skin_checked='1'>
					<p>
						Don’t have any account?{' '}
						<Link className='text-primary' href='/auth/register'>
							Sign Up
						</Link>
					</p>
				</div>
			</Wrapper>
		</>
	)
}
