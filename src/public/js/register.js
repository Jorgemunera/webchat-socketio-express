const login = document.querySelector("#login");

login.addEventListener("click", () => {
    const user = document.querySelector("#username").value;
    if(user != ""){
        // guardamos el user en una cookie
        document.cookie = `username=${user}`;
        document.location.href = "/";
    } else {
        alert("Escribe un nombre de usuario")
    }
})