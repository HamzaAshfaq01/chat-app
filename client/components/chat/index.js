'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import Message from './message'
import Reply from './reply'
import socket from '@/components/socket'
import { useSelector } from 'react-redux'

function Chat() {
	const currentChat = useSelector((state) => state.chat.currentChat)
	const user = useSelector((state) => state.user.user)

	const [messages, setMessages] = useState([])
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (currentChat) {
			const fetchMessages = async () => {
				const { data } = await axios.get(`http://localhost:5000/api/messages/${currentChat?._id}`, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				setMessages(data)
			}

			fetchMessages()
		}
	}, [currentChat])

	useEffect(() => {
		const joinRoom = () => {
			if (currentChat) {
				socket.emit('join', user?.id)
			}
		}

		joinRoom()
	}, [currentChat, user?.id])

	useEffect(() => {
		socket.on('receiveMessage', (message) => {
			if (message.userId === currentChat?._id) {
				setMessages((prevMessages) => [...prevMessages, message])
			}
		})
	}, [currentChat])

	const sendMessage = async () => {
		const newMessage = {
			userId: user?.id,
			username: user?.username,
			content: message,
			receiverId: currentChat?._id,
		}

		socket.emit('sendMessage', newMessage)
		await axios.post('http://localhost:5000/api/messages', newMessage, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
		setMessages((prevMessages) => [...prevMessages, newMessage])
		setMessage('')
	}

	return (
		<div className='flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4'>
			<Header />
			<div className='no-scrollbar max-h-full space-y-3.5 overflow-auto px-6 py-7.5'>
				{messages.map((message, index) => (
					<React.Fragment key={index}>
						{message?.userId !== user?.id ? <Message message={message} /> : <Reply message={message} />}
					</React.Fragment>
				))}
			</div>
			<Footer sendMessage={sendMessage} message={message} setMessage={setMessage} />
		</div>
	)
}

export default Chat
