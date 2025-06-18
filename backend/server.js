const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Routes
const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Socket handlers
const setupSocket = require('./socket');

// Load environment variables
dotenv.config();

// App setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('🌍 Trip Planner Backend is running');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Real-time Collaboration using Socket.IO (Modular)
setupSocket(io);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
