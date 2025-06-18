// controllers/messageController.js

const Message = require('../models/message');

const getMessages = async (req, res) => {
  try {
    const tripId = req.params.tripId;
    const messages = await Message.find({ tripId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { userId, text } = req.body;
    const tripId = req.params.tripId;
    const message = new Message({ tripId, userId, text });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = {
  getMessages,
  sendMessage
};
