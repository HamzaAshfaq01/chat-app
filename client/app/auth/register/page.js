'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Breadcrumb from '@/components/auth/breadcrumb'
import Wrapper from '@/components/auth/wrapper'
import { EmailSVG, PasswordSVG } from '@/components/svg'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const validationSchema = Yup.object({
	username: Yup.string().required('Username is required'),
	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
})

export default function Register() {
	const router = useRouter()
	const onSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await axios.post('https://chat-app-production-8ade.up.railway.app/api/auth/register', {
				username: values.username,
				password: values.password,
			})
			if (response.status === 201) {
				toast.success('Registration successful')
				router.push('/auth/login')
			}
		} catch (error) {
			console.log(error.response, 'error.response')
			if (error.response && error.response.data) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Registration failed')
			}
			console.log(error.message, 'Error while registration')
		}
		setSubmitting(false)
	}
	return (
		<>
			<Breadcrumb title='Register' />
			<Wrapper>
				<h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>Register</h2>
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
							<div className='mb-6' bis_skin_checked='1'>
								<label className='mb-2.5 block font-medium text-black dark:text-white'>Re-type Password</label>
								<div className='relative' bis_skin_checked='1'>
									<Field
										type='password'
										placeholder='6+ Characters, 1 Capital letter'
										className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10  outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
										name='confirmPassword'
									/>
									<span className='absolute right-4 top-4'>
										<PasswordSVG />
									</span>
								</div>
								<ErrorMessage name='confirmPassword' component='div' className='error' />
							</div>
							<div className='mb-5' bis_skin_checked='1'>
								<button
									className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
									type='submit'>
									{isSubmitting ? 'Loading...' : 'Register'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
				<div class='mt-6 text-center' bis_skin_checked='1'>
					<p>
						Already have an account?{' '}
						<Link class='text-primary' href='/auth/login'>
							Sign in
						</Link>
					</p>
				</div>
			</Wrapper>
		</>
	)
}
