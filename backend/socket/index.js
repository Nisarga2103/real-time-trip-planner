module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('🟢 New client connected:', socket.id);

        // Join a room
        socket.on('joinRoom', (roomId) => {
            socket.join(roomId);
            console.log(`🟢 Client ${socket.id} joined room ${roomId}`);
        });

        // Handle sending messages
        socket.on('sendMessage', ({ roomId, message }) => {
            console.log(`📩 Message to ${roomId}:`, message);
            io.to(roomId).emit('receiveMessage', message);
        });

        // Handle trip updates
        socket.on('tripUpdate', ({ roomId, data }) => {
            io.to(roomId).emit('receiveTripUpdate', data);
        });

        // Disconnect
        socket.on('disconnect', () => {
            console.log('🔴 Client disconnected:', socket.id);
        });
    });
};
