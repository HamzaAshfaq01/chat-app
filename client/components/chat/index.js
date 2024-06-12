import React from 'react'
import Header from './header'
import Footer from './footer'
import Message from './message'
import Reply from './reply'

function Chat() {
	return (
		<div className='flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4'>
			<Header />
			<div className='no-scrollbar max-h-full space-y-3.5 overflow-auto px-6 py-7.5'>
				{[true, false, true, false].map((message, index) => (
					<React.Fragment key={index}>{message ? <Message /> : <Reply />}</React.Fragment>
				))}
			</div>
			<Footer />
		</div>
	)
}

export default Chat
