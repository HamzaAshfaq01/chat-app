'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer } from 'react-toastify'
import store from '@/redux/store'

let persistor = persistStore(store)

export default function Wrapper({ children }) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<div className='min-h-screen flex items-center justify-center'>
						<div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
							<main>{children}</main>
						</div>
					</div>
				</PersistGate>
			</Provider>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
				theme='light'
			/>
		</>
	)
}
