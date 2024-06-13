'use client'
import { removeUserData } from '@/redux/features/user.slice'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.user)
	const [showLogoutDropdown, setShowLogoutDropdown] = useState(false)

	const logoutHandler = () => {
		setShowLogoutDropdown(false)
		dispatch(removeUserData())
		redirect('/auth/login')
	}
	return (
		<header
			className='sticky flex justify-between items-center border-b border-stroke px-6 py-7.5 dark:border-strokedark'
			bis_skin_checked='1'>
			<h3 className='text-lg font-medium text-black dark:text-white 2xl:text-xl'>{user?.username} &nbsp;</h3>
			<div bis_skin_checked='1'>
				<div className='relative flex' bis_skin_checked='1'>
					<button onClick={() => setShowLogoutDropdown(!showLogoutDropdown)} className='text-[#98A6AD] hover:text-body'>
						<svg
							className='fill-current'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z'
								fill=''></path>
							<path
								d='M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z'
								fill=''></path>
							<path
								d='M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z'
								fill=''></path>
						</svg>
					</button>
					<div
						className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
							showLogoutDropdown ? '' : 'hidden'
						}`}
						bis_skin_checked='1'>
						<button
							className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'
							onClick={logoutHandler}>
							Logout
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
