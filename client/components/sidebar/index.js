'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Header from './header'
import User from './user'

function SideBar() {
	const token = useSelector((state) => state.user.user.token)
	const [users, setUsers] = useState([])

	const getAllUsers = async () => {
		try {
			const { data } = await axios.get('http://localhost:5000/api/users/all', {
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
		<div className='hidden h-full flex-col xl:flex xl:w-1/4'>
			<Header />
			<div className='flex max-h-full flex-col overflow-auto p-5'>
				<div className='no-scrollbar max-h-full space-y-2.5 overflow-auto'>
					{users.map((user, index) => (
						<User user={user} key={index} />
					))}
				</div>
			</div>
		</div>
	)
}

export default SideBar
