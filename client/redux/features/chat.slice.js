// userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentChat: null,
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setActiveChat: (state, action) => {
			state.currentChat = action.payload
		},
	},
})

export const {setActiveChat } = chatSlice.actions

export default chatSlice.reducer
