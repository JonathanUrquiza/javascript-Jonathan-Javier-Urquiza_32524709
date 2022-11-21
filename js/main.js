//Pre-entrega 1


//ingreso de información

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
}

//fin del codigo