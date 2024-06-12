import React from 'react'
import Header from './header'
import User from './user'

function SideBar() {
	return (
		<div className='hidden h-full flex-col xl:flex xl:w-1/4'>
			<Header />
			<div className='flex max-h-full flex-col overflow-auto p-5'>
				<div className='no-scrollbar max-h-full space-y-2.5 overflow-auto'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user, index) => (
					<User key={index} />
				))}
				</div>
			</div>
		</div>
	)
}

export default SideBar
