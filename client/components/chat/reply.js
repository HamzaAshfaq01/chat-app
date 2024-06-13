import React from 'react'
import moment from 'moment/moment'

export default function Reply({message}) {
	return (
		<div className='ml-auto max-w-125' bis_skin_checked='1'>
			<div className='mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3' bis_skin_checked='1'>
				<p className='text-white'>{message?.content}</p>
			</div>
			<p className='text-right text-xs'>{moment(message?.timestamp).format('hh:mm A')}</p>
		</div>
	)
}
