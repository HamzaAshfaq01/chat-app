import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
	const currentChat = useSelector((state) => state.chat.currentChat)
	return (
		<header className='sticky flex items-center justify-between border-b border-stroke px-6 py-4.5 dark:border-strokedark'>
			<div className='flex items-center'>
				<div className='mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full' bis_skin_checked='1'>
					<img
						src='https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato'
						alt='User Avatar'
						className='h-full w-full object-cover object-center'
					/>
				</div>
				<div bis_skin_checked='1'>
					<h5 className='font-medium text-black dark:text-white'>{currentChat?.username}</h5>
					<p className='text-sm'>Reply to message</p>
				</div>
			</div>
		</header>
	)
}

export default Header
