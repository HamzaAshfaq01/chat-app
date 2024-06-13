const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')
const messageRoutes = require('./routes/messages')
const userRoutes = require('./routes/users')

dotenv.config()
connectDB()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: '*',
	},
})

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

// Socket.IO setup
io.on('connection', (socket) => {
	console.log('New client connected:', socket.id)

	socket.on('join', (userId) => {
		socket.join(userId)
		console.log(`User ${userId} joined room`)
	})

	socket.on('sendMessage', (message) => {
		io.to(message.receiverId).emit('receiveMessage', message)
	})

	socket.on('disconnect', () => {
		console.log('Client disconnected:', socket.id)
	})
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
