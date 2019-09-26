let db = require('/models')

module.exports = io => {

    io.on('connection', socket => {

        console.log(socket.id, ' is connected to the server!');

        socket.on('new-message', message => {
            socket.broadcast.emit('new-message', message);
        });

        socket.on('new-room', channel => {
            socket.broadcast.emit('new-room', channel);
        });

    });
return io
};
