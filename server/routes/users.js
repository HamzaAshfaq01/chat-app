const express = require('express')
const { protect } = require('../middlewares/auth')
const { getUsers } = require('../controllers/user')

const router = express.Router()

router.get('/all', protect, getUsers)

module.exports = router
