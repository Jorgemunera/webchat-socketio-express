module.exports = (httpServer) => {
    const {Server} = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {
        console.log(`sokcet id conectado ${socket.id}`);

        // vamos a obtener la informaion de la cookie
        const cookie = socket.handshake.headers.cookie;
        const user = cookie.split("=").pop();

        socket.on("message", message => {
            io.emit("message", {
                user,
                message
            });
        })
    })
}