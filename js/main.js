let operacion = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"));
if (operacion == 1) {
    function sumar(numUno, numDos) {
        let resultado = numUno + numDos;
        return resultado;
      }
      let suma = sumar(
        parseFloat(prompt("ingrese el primer valor a sumar")),
        parseFloat(prompt("ingrese el segundo valor a sumar"))
      );
    alert(`El resultad de la suma es: ${suma}`);
} else if (operacion == 2) {
    function restar(numUno, numDos) {
        let resultado = numUno - numDos;
        return resultado;
      }
      let resta = restar(
        parseFloat(prompt("ingrese el primer valor a restar")),
        parseFloat(prompt("ingrese el segundo valor a restar"))
      );
    alert(`El resultado de la resta es: ${resta}`);
} else if (operacion == 3) {
    function multiplicacion(numUno, numDos) {
        let resultado = numUno * numDos;
        return resultado;
      }
      let multi = multiplicacion(
        parseFloat(prompt("ingrese el primer valor a multiplicar")),
        parseFloat(prompt("ingrese el segundo valor a multiplicar"))
      );
    alert(`El resultado de la multiplicación es: ${multi}`);
} else if (operacion == 4) {
    function dividir(numUno, numDos) {
        let resultado = numUno / numDos;
        return resultado;
      }
      let divi = dividir(
        parseFloat(prompt("ingrese el primer valor a dividir")),
        parseFloat(prompt("ingrese el segundo valor a dividir"))
      );
    alert(`El resultado de la división es: ${divi}`);
} else {
alert("la opción seleccionada no existe");
}