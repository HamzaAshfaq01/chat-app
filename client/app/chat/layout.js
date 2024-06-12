'use client'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function ProtectedLayout({ children }) {
	const user = useSelector((state) => state.user)
	if (!user.isAuthenticated) {
		redirect('/auth/login')
	}
	return children
}
