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

let operacion = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"));

if (operacion == 1) {
    function sumar(numUno, numDos) {
        let resultado = numUno + numDos;
        return resultado;
      }
      let suma = sumar(
        parseInt(prompt("ingrese el primer valor a sumar")),
        parseInt(prompt("ingrese el segundo valor a sumar"))
      );
    alert(`El resultad de la suma es: ${suma}`);
}
 
else 

if (operacion == 2) {
    function restar(numUno, numDos) {
        let resultado = numUno - numDos;
        return resultado;
      }
      let resta = restar(
        parseInt(prompt("ingrese el primer valor a restar")),
        parseInt(prompt("ingrese el segundo valor a restar"))
      );
    alert(`El resultado de la resta es: ${resta}`);
}

else 

if (operacion == 3) {
    function multiplicacion(numUno, numDos) {
        let resultado = numUno * numDos;
        return resultado;
      }
      let multi = multiplicacion(
        parseInt(prompt("ingrese el primer valor a multiplicar")),
        parseInt(prompt("ingrese el segundo valor a multiplicar"))
      );
    alert(`El resultado de la multiplicación es: ${multi}`);
}

else 

if (operacion == 4) {
    function dividir(numUno, numDos) {
        let resultado = numUno / numDos;
        return resultado;
      }
      let divi = dividir(
        parseInt(prompt("ingrese el primer valor a dividir")),
        parseInt(prompt("ingrese el segundo valor a dividir"))
      );
    alert(`El resultado de la división es: ${divi}`);
}

else 

{
alert("la opción seleccionada no existe");
}



