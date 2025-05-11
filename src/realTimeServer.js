module.exports = (httpServer) => {
    const {Server} = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {
        console.log(`sokcet id conectado ${socket.id}`);
    })
}