'use client'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from './features/user.slice'
import chatReducer from './features/chat.slice'

const reducers = combineReducers({
  user: userReducer,
  chat: chatReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
