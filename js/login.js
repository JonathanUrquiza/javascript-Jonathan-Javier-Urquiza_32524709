document.title = "Login";
const btnLog = document.querySelector("#btnLog"),
user = document.querySelector("#user"),
pass = document.querySelector("#pass"),
check = document.querySelector("#check");

/*Funciones  */
function inicioSecion(usuarios) {
    //codigo
    let userFound = usuarios.find(usuario =>{
        return usuario.nombre == user.value && usuario.pass == pass.value;
    });
    userFound? window.location.href = "../pages/3°entrega.html" : window.alert("usuario no encontrado!!!");
}
function recuperaLS() {
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}


/*Ejecucion de funciones */
const usuariosLS = recuperaLS();

//listener
btnLog.addEventListener('click',(e)=>{
    e.preventDefault()
    inicioSecion(usuariosLS)
   
});