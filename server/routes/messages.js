const express = require('express');
const { protect } = require('../middlewares/auth');
const { getMessages, sendMessage } = require('../controllers/messages');

const router = express.Router();

router.get('/:userId', protect, getMessages);
router.post('/', protect, sendMessage);

module.exports = router;
