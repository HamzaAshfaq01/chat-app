// userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	currentChat: null,
	isAuthenticated: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload
			state.isAuthenticated = true
		},
		setActiveChat: (state, action) => {
			state.currentChat = action.payload
		},
		removeUserData: (state) => {
			state.user = null
			state.isAuthenticated = false
		},
	},
})

export const { setUserData, setActiveChat, removeUserData } = userSlice.actions

export default userSlice.reducer
