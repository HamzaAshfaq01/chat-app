import { setActiveChat } from '@/redux/features/chat.slice'
import React from 'react'
import { useDispatch } from 'react-redux'

function User({ user }) {
	const dispatch = useDispatch()
	const activeChatHandle = () => {
		dispatch(setActiveChat(user))
	}
	return (
		<div
			onClick={activeChatHandle}
			className='flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark'>
			<div className='relative mr-3.5 h-11 w-full max-w-11 rounded-full'>
				<img
					src='https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato'
					alt='User Avatar'
					className='h-full w-full object-cover object-center'
				/>
			</div>
			<div className='w-full'>
				<h5 className='text-sm font-medium text-black dark:text-white'>Hamza</h5>
			</div>
		</div>
	)
}

export default User
