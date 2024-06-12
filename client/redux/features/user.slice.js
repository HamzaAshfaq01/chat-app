// userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
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
		removeUserData: (state) => {
			state.user = null
			state.isAuthenticated = false
		},
	},
})

export const { setUserData, removeUserData } = userSlice.actions

export default userSlice.reducer
