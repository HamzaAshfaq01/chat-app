import React from 'react'

export default function Defautchat() {
	return (
		<div className='flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4'>
			<div
				className='h-full flex items-center rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20'
				bis_skin_checked='1'>
				<div className='mx-auto max-w-[410px]' bis_skin_checked='1'>
					<img
						alt='illustration'
						loading='lazy'
						width='300'
						height='400'
						decoding='async'
						data-nimg='1'
						src='/illustration-01.svg'
					/>
					<div className='mt-7.5 text-center' bis_skin_checked='1'>
						<h2 className='mb-3 text-2xl font-bold text-black dark:text-white'>Welcome to the Chat Application!</h2>
						<p className='font-medium'>
							Please select a chat to start messaging. You can choose from your existing conversations or start a new
							chat.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
