const Message = require('../models/message')

const getMessages = async (req, res) => {
	const { userId } = req.params

	try {
		const messages = await Message.find({
			$or: [
				{
					userId: req.user.id,
					receiverId: userId,
				},
				{
					userId,
					receiverId: req.user.id,
				},
			],
		})
			.sort({
				timestamp: -1,
			})
			.limit(50)

		res.status(200).json(messages)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

const sendMessage = async (req, res) => {
	const { userId, username, content, receiverId } = req.body

	try {
		const message = new Message({
			userId,
			username,
			content,
			receiverId,
		})

		await message.save()

		res.status(201).json(message)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

module.exports = {
	getMessages,
	sendMessage,
}
