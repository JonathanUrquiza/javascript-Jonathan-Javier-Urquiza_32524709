document.title = "Registrarse";
const formulario = document.querySelector("#form"),
    email = document.querySelector("#email"),
    nombre = document.querySelector("#nombre"),
    userReg = document.querySelector("#userReg"),
    passReg = document.querySelector("#passReg"),
    checkbox = document.querySelector("#checkbox"),
    parrafo = document.querySelector("p"),
    btnRegister = document.querySelector("#btnRegister");

let usuarios;
localStorage.getItem("usuarios") ? usuarios = JSON.parse(localStorage.getItem("usuarios")) : usuarios = [];

function guardarLS(valor) {
    let user = { usuario: email.value, pass: password.value };
    if (user.usuario == "" || user.pass == "") {
        parrafo.innerText = "Todos los campos son requeridos";
        return;
    } else {
        valor === "localStorage" && localStorage.setItem("item", JSON.stringify(user));
        valor === "sessionStorage" && sessionStorage.setItem("item", JSON.stringify(user));
    }
    return user;
}
//contructor de usuarios
class Usuarios {
    constructor(nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password;
    }
}

function limpiarCampos() {
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}
//guardar usuario
function guardarUsuario(usuario) {
    return usuarios.push(usuario)
}
//gaurdar en ls
function guardarEnstorage(elemento) {
    return localStorage.setItem('usuarios', JSON.stringify(elemento))
}
//evento

btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    let newUser = new Usuarios(nombre.value, userReg.value, email.value, passReg.value)
    limpiarCampos()
    guardarUsuario(newUser)
    guardarEnstorage(usuarios)
    //checkbox.checked ? guardarLS("localStorage") : guardarLS("sessionStorage");
    window.location.href = "pages/login.html"
})
