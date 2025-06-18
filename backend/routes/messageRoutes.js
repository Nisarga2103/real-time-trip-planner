// routes/messageRoutes.js
const express = require('express');
const router = express.Router();

const { getMessages, sendMessage } = require('../controllers/messageController');

router.get('/:tripId', getMessages);
router.post('/:tripId', sendMessage);

module.exports = router;
