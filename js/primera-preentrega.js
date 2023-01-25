function sumar(numUno, numDos) {
    return numUno + numDos;
}

function restar(numUno, numDos) {
    return numUno - numDos;
}

function multiplicacion(numUno, numDos) {
    return numUno * numDos;
}

function dividir(numUno, numDos) {
    if(num2 === 0) {
        alert("Error: no es posible dividir por 0");
        return;
    }
    return numUno / numDos;
}

let operacion = parseInt(prompt("ingrese \n1 para calcular el volumen de la solución, \n2 para calcular el volumen del soluto, \n3 para calcular el volumen del solvente."));

let resultado = 0;

let num1 = parseFloat(prompt("ingrese el primer valor"));
let num2 = parseFloat(prompt("ingrese el segundo valor a sumar"))

if (operacion == 1) {
    resultado = sumar(num1, num2);
    alert(`El resultad de la suma es: ${resultado}`);
} else if (operacion == 2) {
    resultado = restar(num1, num2);
    alert(`El resultado de la resta es: ${resultado}`);
} else if (operacion == 3) {
    resultado = multiplicacion(num1, num2);
    alert(`El resultado de la multiplicación es: ${resultado}`);
} else if (operacion == 4) {
    resultado = dividir(num1, num2);
    alert(`El resultado de la división es: ${resultado}`);
}
else {
    alert("la opción seleccionada no existe");
}

