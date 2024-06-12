const jwt = require('jsonwebtoken')
const User = require('../models/user')

const registerUser = async (req, res) => {
	const { username, password } = req.body

	try {
		const userExists = await User.findOne({ username })

		if (userExists) {
			return res.status(400).json({ message: 'User already exists' })
		}

		const user = await User.create({
			username,
			password,
		})

		res.status(201).json({
			id: user.id,
			username: user.username,
			token: generateToken(user.id),
		})
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const authUser = async (req, res) => {
	const { username, password } = req.body

	try {
		const user = await User.findOne({ username })

		if (user && (await user.matchPassword(password))) {
			res.json({
				id: user.id,
				username: user.username,
				token: generateToken(user.id),
			})
		} else {
			res.status(401).json({ message: 'Invalid username or password' })
		}
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
}

module.exports = {
	registerUser,
	authUser,
}
