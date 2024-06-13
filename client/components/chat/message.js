import React from 'react'
import moment from 'moment/moment'

export default function Message({ message }) {
	return (
		<div className='max-w-125' bis_skin_checked='1'>
			<p className='mb-2.5 text-sm font-medium'>{message?.username}</p>
			<div className='mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2' bis_skin_checked='1'>
				<p>{message?.content}</p>
			</div>
			<p className='text-xs'>{moment(message?.timestamp).format('hh:mm A')}</p>
		</div>
	)
}
