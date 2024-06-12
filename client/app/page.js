'use client'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Home() {
	const user = useSelector((state) => state.user)
	if (!user.isAuthenticated) {
		redirect('/auth/login')
	} else {
		redirect('/chat')
	}
	return <h1>Welcome!</h1>
}
