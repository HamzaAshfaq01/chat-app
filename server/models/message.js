// server/models/messageModel.js
const models = require('../config/cassandra')

const Message = models.loadSchema('Message', {
	fields: {
		id: 'uuid',
		userId: 'uuid',
		username: 'text',
		content: 'text',
		timestamp: 'timestamp',
	},
	key: ['id'],
})

module.exports = Message
