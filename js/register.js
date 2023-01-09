document.title = "Registrarse";
const register = document.querySelector("#register"),
email = document.querySelector("#email"),
nombre = document.querySelector("#nombre"),
userReg = document.querySelector("#userReg"),
passReg = document.querySelector("#passReg"),
btnRegister = document.querySelector("#btnRegister");

let usuarios;
//si hay datos en LS? (usuarios = LS: usuarios=[])
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
//validar campos vacios
function camposVacios() {
    //algo
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

btnRegister.addEventListener('click', (e)=>{
    e.preventDefault();
    let newUser = new Usuarios(nombre.value, userReg.value, email.value, passReg.value)
    limpiarCampos()
    guardarUsuario(newUser)
    guardarEnstorage(usuarios)

})