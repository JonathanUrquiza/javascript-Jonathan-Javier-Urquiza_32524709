const numeros = [{numero: 1}, {numero: 2},{numero:3},{numero:4},];
const nume = [1,2,3,4,5,];


console.log(nume[0]);
console.log(numeros[0].numero + numeros[1].numero + numeros[2].numero);
console.log(nume.concat(numeros));
console.log(nume.concat(numeros[0].numero));

//workbook: ejercicio 1 if {} else {}

//Ingreso de información
/*
let operación = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"));
let numUno;
let numDos;
let resultado;

if (operación <= 4) {
    numUno = parseInt(prompt("ingrese el primer valor"));
    numDos = parseInt(prompt("ingrese el segundo valor"));
    if (operación == 1) {
        resultado = numUno + numDos;
        alert('El resultad de la suma es: ${resultado}');
    } else if (operación == 2) {
        resultado = numUno - numDos;
        alert('El resultado de la resta es: ${resultado}');
    } else if (operación == 3) {
        resultado = numUno * numDos;
        alert('El resultado de la multiplicación es: ${resultado}');
    } else if (operación == 4) {
        resultado = numUno / numDos;
        alert('El resultado de la división es: ${resultado}');
    }
    alert('gracias por utilizar la calculadora.')
} else {
    alert("La opción seleccionada no existe");
}


// ejercicio 2 ciclo for{} (fibonacci)

for(desde; hasta; actualización) {
 … //lo que se escriba acá se ejecutará mientras dure el ciclo
}


let a = 0; 
let b = 1; 
let c = 0;

for(let i = 0; i <= 15; i++){
    console.log(a + ", ");

c = a + b;
a = b;
b = c;
}


for (let i = 0; i < 10; i++) {
    console.log(i);
    alert(i);
}


tablas de multiplicar

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

turnos

for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

*/
/*
let usuario = "Dani";
if (usuario == "Dani") {
    let pass = prompt('Ingresa tu pass');
    if (pass == "123") {
        console.log("bienvenido " + usuario);
    } else {
        console.log("hubo un error");
    }
}


// variables bumeanas

let Numero = 33;

let esmayor = Numero <= 33;

console.log(Numero);
console.log(esmayor);

if (esmayor) {
    console.log("El numero es mayor o igual");
} else {
    console.log("El numero NO es mayor");
}

// operador logico

let edad = 18;
if (edad < 18) {
    console.log("no podes entrar al casino");
} else {
    console.log("bienvenido al casino");
}
*/ 
/* operador && devuelve true cunado dos condiciones son true
si:
edad < 18  && nombre == "dani" las dos condiciones tiene que ser verdaderas para


//log de ingreso
let nombreGuardado = "Pepe";
let passGuardado = "123";
let ingresoNombre = prompt(" ingrese su usuario");
let ingrsePass = prompt("ingrese su pass")
if (nombreGuardado == ingresoNombre && passGuardado === ingrsePass) {
    console.log("bienvenido " + ingresoNombre);
} else {
    console.log("Hubo un error");
}
*/

