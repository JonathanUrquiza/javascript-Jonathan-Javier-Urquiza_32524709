// funciones declaracion
/*
function saludar() {
    //bloque de ejecucion
    console.log("hola tarola!!!");
}
//llamado o invocación a la funcion se la llama por su nombre
saludar();
saludar ()
saludar ()
function ingresarNombre() {
    let nombreIngreso = prompt("ingrese su nombre");
    console.log(nombreIngreso);
}
ingresarNombre();
ingresarNombre();

for (let index = 1; index < 3; index++) {
    ingresarNombre();
    
}*/

//parametros

function conParametros(param1, param2) {
    console.log(param1 + param2);
    
}
conParametros(1, 2);

////////////////////////////////////////////
let result = 0;

function suma(num1, num2) {
    result = num1 + num2;
    
}
///////
function mostrar(mensaje) {
    console.log(mensaje);
    
}
suma(9, 11);
mostrar("soy un mensaje");
