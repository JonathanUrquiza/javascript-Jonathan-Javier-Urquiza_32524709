// bucle por conteo

/* sentecia break: nos permite frenar el bucle cuando sucede algo*/

/*let palabraCalve = "offside";


for (let i = 0; i <= 3; i++) {
    if (palabraCalve === ingreso) {
        let ingreso = prompt('ingresa la palabra clave');
        alert('Adivinaste la palabra clave');
    }
    break;
}*/

//sentecia "continue"
/*
for (let i = 0; i < ; i++) {
    if ( i === 5) {
        continue
    }
    console.log(i);
}
*/

// contador while, ejecuta el codigo aunque sea una vez!
/*
let ingreso = prompt('Ingrese un producto, para salir ingrese ESC');
while (ingreso != "ESC") {
    console.log("ingresaste " + ingreso);
    ingreso = prompt('Ingresa un producto, para salir ESC');
}
*/

//do while

//Pre-entrega 1

//ingreso de información
/*
let numUno;
let numDos;
let resultado;
let operacion = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"));

// condición
if (operacion <= 4) {
    numUno = parseInt(prompt("ingrese el primer valor"));
    numDos = parseInt(prompt("ingrese el segundo valor"));
    if (operacion == 1) {
        resultado = numUno + numDos;
        alert(`El resultad de la suma es: ${resultado}`);
    } else if (operacion == 2) {
        resultado = numUno - numDos;
        alert(`El resultado de la resta es: ${resultado}`);
    } else if (operacion == 3) {
        resultado = numUno * numDos;
        alert(`El resultado de la multiplicación es: ${resultado}`);
    } else if (operacion == 4) {
        resultado = numUno / numDos;
        alert(`El resultado de la división es: ${resultado}`);
    }
    alert(`gracias por utilizar la calculadora.`);
} else {
    alert(`gracias por utilizar la calculadora.`);
}*/

//fin del codigo

/*

function operaciones(numUno, numDos, resultado) {
    

    
    if (operacion <= 4) {
        if (operacion == 1) {
            resultado = numUno + numDos;
            alert(`El resultad de la suma es: ${resultado}`);
        } else if (operacion == 2) {
            resultado = numUno - numDos;
            alert(`El resultado de la resta es: ${resultado}`);
        } else if (operacion == 3) {
            resultado = numUno * numDos;
            alert(`El resultado de la multiplicación es: ${resultado}`);
        } else if (operacion == 4) {
            resultado = numUno / numDos;
            alert(`El resultado de la división es: ${resultado}`);
        }
        alert(`gracias por utilizar la calculadora.`);
    } else {
        alert(`gracias por utilizar la calculadora.`);
    }
}
let operacion = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"));
let suma = operaciones( parseInt(prompt("ingrese el primer valor")), parseInt(prompt("ingrese el segundo valor")) );
alert();
*/