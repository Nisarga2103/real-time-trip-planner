module.exports = (io, socket) => {
    // Join a chat room
    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        console.log(`🟢 ${socket.id} joined chat room ${roomId}`);
    });

    // Handle sending chat messages
    socket.on('sendMessage', ({ roomId, message }) => {
        console.log(`💬 Message to ${roomId}: ${message}`);
        io.to(roomId).emit('receiveMessage', message);
    });
};
