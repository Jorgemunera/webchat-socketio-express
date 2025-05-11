const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
    const message = document.querySelector("#message").value;
    socket.emit("message", message);
})

socket.on("message", ({user, message}) => {
    // esta es una manera mas rapida de crear elementos html, sin tener que crear uno por uno, asignarle la clase y luego ir metiendo cada elemento en su contenedor.
    // de esta manera lo hacemos mas rapido
    const msg = document.createRange().createContextualFragment(
    `
        <div class="message">
            <div class="image-container">
                <img src="/images/michi.jpeg" alt="foto">
            </div>
            <div class="message-body">
                <div class="user-info">
                    <span class="username">${user}</span>
                    <span class="time">Hace 1 segundo</span>
                </div>
                <p> ${message}</p>
            </div>
        </div>
    `);   
    
    allMessages.append(msg);
})