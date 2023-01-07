const register = document.querySelector("register"),
email = document.querySelector("#email"),
nombre = document.querySelector("#nombre"),
userReg = document.querySelector("#userReg"),
passReg = document.querySelector8("#passReg"),
btnRegistrar = document.querySelector("#registrar");

let usuarios;
if (localStorage.getItem("usuarios")) {
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
} else {
    usuarios = [];
}
//contructor de usuarios
class Usuarios {
    constructor (nombre, usuario, email, password){
        this.nombre = nombre;
        this.usuario = usuario;
        this. email = email;
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

btnRegistrar.addEventListener('click', (e)=>{
    e.preventDefault();
    let newUser = new Usuarios(nombre.value, userReg.value, email.value, passReg.value)
    guardarUsuario(newUser)
    guardarEnstorage(usuarios)

})