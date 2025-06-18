module.exports = (io, socket) => {
    // Handle trip updates
    socket.on('tripUpdate', ({ roomId, data }) => {
        console.log(`🗺️ Trip update in ${roomId}:`, data);
        io.to(roomId).emit('receiveTripUpdate', data);
    });
};
