/* bucle por conteo
lo uso cuando conozco la cantidad de veces que voy a utilizar la accion!!
concepto
for (desde ; hasta ; actualizacion) {
}
////////////////////////////////////////



for (let i = 0; i < 10; i++) {
    console.log("llegamos a la india?");
    
}
///////////////////////////////////////////////////
Tabla de multiplicar
let ingreso = prompt ('ingresa un numero');
let limite = prompt('ingresa hasta donde');

for(let i = 0; i <= limite; i++) {
    let resultado = ingreso * i;
    console.log("el resultado de la operacion " + i + " * " + ingreso + " es " + resultado );
}
////////////////////////////////////////////////////////


//Decremento de la variable
for (let index = 10; index > 0; index--) {
    console.log("faltan " + index + " segundos  para fin de año");
    
}
////////////////////////////////////////////////////////
repeticion de saludo
for (let index = 1; index <= 3; index++) {
    let nombre = prompt("ingresa un nombre");
    console.log("bienvenido " + nombre + " tu turno es " + index + " tenes " + (index-1) + " personas antes");
}
///////////////////////////////////////////////////


sentecia break: nos permite frenar el bucle cuando sucede algo


let palabraCalve = "offside";

for (let i = 0; i <= 3; i++) {
    let ingreso = prompt('ingresa la palabra clave');
    
    if (palabraCalve === ingreso) {
        alert('Adivinaste la palabra clave');
        break;
    }
} 
*/





//sentecia "continue" nos permite que si el valor de i es igual a 5 que lo saltea.
//el valor de i no lo imprime!
//el % es el modulo, es el resto de la division, 
//si modulo de 2 es = a 0, imprime impares
//si i % 2 != 0 imprime pares.
/*
for (let i = 0; i <= 20 ; i++) {
    if ( i % 2 == 0) {
        console.log("impar");
        continue;//no ejecuta lo que esta debajo!
    }
    console.log(i);
}
/////////////////////////////////////////////
numeros primos
let esPrimo = true;

let numero = parseInt(prompt('ingresa un numero'));

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        console.log("admas de dividir por 1 y por si mismo ", i);
        esPrimo = false;
    }    
    
}
if (esPrimo) {
    alert("es primo")    
} else {
    alert("no es primo")
}
////////////////////////////////////////////////////
//while: mientras la condicion sea true el loop se ejecuta y para en false
let contador = 0;
while (contador < 10) {
    console.log(contador);
    //condicion de salida
    contador++//asi contador suma y frena automaticamente
}
/////////////////////////////////////////////////////



// contador while, ejecuta el codigo aunque sea una vez!

let ingreso = prompt('Ingrese un producto, para salir ingrese ESC');
while (ingreso != "ESC") {
    console.log("ingresaste " + ingreso);
    ingreso = prompt('Ingresa un producto, para salir ESC');
}

*/

//do while ejecuta el codigo aunque sea una vez!

//HACER MIENTRAS
/* let ingreso = '';

do {
ingreso = prompt("ingresa para salir ESC");
console.log("ingresaste " + ingreso);    
} while (ingreso != "ESC");
 */