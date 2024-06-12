import React from 'react'
import Chat from '@/components/chat'
import SideBar from '@/components/sidebar'
import Breadcrumb from '@/components/auth/breadcrumb'

function ChatPage() {
	return (
		<div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
			<Breadcrumb title='Messges' />
			<div className='h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]'>
				<div className='h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex'>
					<SideBar />
					<Chat />
				</div>
			</div>
		</div>
	)
}

export default ChatPage
