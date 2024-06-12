'use client'
import React, { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import Message from './message'
import Reply from './reply'
import socket from '@/components/socket'

function Chat() {
	const [messages, setMessages] = useState([])
	const [currentChat, setCurrentChat] = useState(null)
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (currentChat) {
			const fetchMessages = async () => {
				const { data } = await axios.get(`/api/messages/${currentChat.id}`)
				setMessages(data)
			}

			fetchMessages()
		}
	}, [currentChat])

	useEffect(() => {
		socket.on('receiveMessage', (message) => {
			if (message.receiverId === currentChat?.id) {
				setMessages((prevMessages) => [message, ...prevMessages])
			}
		})
	}, [currentChat])

	const sendMessage = async () => {
		const newMessage = {
				userId: 'currentUserId', // Replace with actual current user ID
				username: 'currentUsername', // Replace with actual current username
				content: message,
				receiverId: currentChat.id,
		};

		socket.emit('sendMessage', newMessage);
		await axios.post('/api/messages', newMessage);
		setMessages((prevMessages) => [newMessage, ...prevMessages]);
		setMessage('');
};

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
