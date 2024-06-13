'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Header from './header'
import User from './user'

function SideBar() {
	const token = useSelector((state) => state.user.user.token)
	const [isSidebarOpen, setIsSidebarOpen] = useState([])
	const [users, setUsers] = useState([])

	const sideBarToggle = () => setIsSidebarOpen(!isSidebarOpen)

	const getAllUsers = async () => {
		try {
			const { data } = await axios.get('https://chat-app-production-8ade.up.railway.app/api/users/all', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			setUsers(data)
		} catch (eror) {
			console.log(eror)
		}
	}
	useEffect(() => {
		getAllUsers()
	}, [])
	return (
		<div
			className={`fixed bottom-0 top-22.5 z-999 flex w-[230px] -translate-x-[120%] flex-col rounded-md border border-stroke bg-white dark:border-strokedark dark:bg-boxdark xl:static xl:w-1/4 xl:translate-x-0 xl:border-none ${
				isSidebarOpen ? '!translate-x-0 duration-300 ease-linear' : 'false'
			} false`}
			bis_skin_checked='1'>
			<button
				onClick={sideBarToggle}
				className='absolute -right-20 z-99999 block rounded-md border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark xl:hidden false'>
				<svg className='h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
					<path d='M 22.1875 2.28125 L 20.78125 3.71875 L 25.0625 8 L 4 8 L 4 10 L 25.0625 10 L 20.78125 14.28125 L 22.1875 15.71875 L 28.90625 9 Z M 9.8125 16.28125 L 3.09375 23 L 9.8125 29.71875 L 11.21875 28.28125 L 6.9375 24 L 28 24 L 28 22 L 6.9375 22 L 11.21875 17.71875 Z'></path>
				</svg>
			</button>
			<Header />
			<div className='no-scrollbar max-h-full overflow-auto py-6' bis_skin_checked='1'>
				<ul className='flex flex-col gap-2'>
					{users.map((user, index) => (
						<li
							className='relative flex items-center gap-2.5 py-2.5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full'
							key={index}>
							<User user={user} key={index} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SideBar
