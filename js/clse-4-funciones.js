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
/*
function conParametros(param1, param2) {
    console.log(param1 + param2);
    
}
conParametros(1, 2);

////////////////////////////////////////////
let result = 0;

function suma(num1, num2) {
    result = num1 + num2;
    
}
*/
///////
function mostrar(mensaje) {
    console.log(mensaje);
    
}
/*
//suma(9, 11);
restar(23, 10)
mostrar("soy un mensaje");
*/
////////resultado de funcio/////

function sumar (num1, num2) {
    //valor de retorno, devuelve un resultado.
    return num1 + num2 //devolveme lo que vas a ejecutar
}
let resultado = sumar(3, 7)
//console.log(sumar(10,5));

function calculadora(nume1, nume2, operador) {

    switch (operador) {
        case "+" :
            return nume1 + nume2;
            //todo lo que este denajo de return no se ejecuta.
            break;

        case "-" :
            return nume1 - nume2;
            break;

        case "*" :
            return nume1 * nume2;
            break;

        case "/" :
            //return nume1 / nume2
            if (nume2 == 0) {
                return "no se puede dividir por 0 "
            } else {
                return nume1 / nume2
            }

            break;
        
        default:
            return 0;
            break;
    }
    
}
mostrar(calculadora(3,6,'+'))
mostrar(calculadora(9,-12,'-'))
mostrar(calculadora(33,10,'*'))
mostrar(calculadora(33,10,'/'))

/*SCOPE:{
    es scope o ambito de una variable, es la zona del programa en la cual se define,
    el contexto al que pertenece la misma dentro del algoritmo, restringiendo su uso y alcance.
    global y local

    /*Variables GLOBALES
        si una variable se declara fuera de cualquier funcion o bloque,
        automaticamente se transforma en variable GLOBAL

    let resultados = 0;
    function sumar(params1, pararm2) {
        resultados = params1 + pararm2;    
    }
    sumar(5, 6);
    //se puede acceder a la variable resultados porque es GLOBAL.
    console.log(resultados);


    Variable LOCALES 
        la variable total solamente vive dentro de la funcion, no se puede 
        acceder fuera de la funcion, el log se encuentra fuera de la funcion 

    function add(numero1, numero2) {
        let total = numero1 + numero2
    }
    console.log(total);
    add(3,9)
  las funcines se declara a continuacion de las variables globales, ej
  
  VARIABLES GLOBALES
  FUNCIONES
  INVOCACIONES
    RETURN{
    (si necesito trabajar con un valor  de una variable dentro de una funcion, la coloco en "return"
    esto me permite trabajar con ese valor fuera de la funcion, "si yo no retorno ese valor
    la variable va a vivir y morir en la funcion").}
}*/

/////FORMAS Y MANERAS DE ESCRIBIR FUNCIONES/////

/*                  funcion ANONIMA
como no tiene nombre, hay que guardarla dentro de una vairable, el nombre
lo obitiene de la variable.

CONST saludo = funcion(){
    console.log("soy una funcion anonima");
}
saludo();

                funciones flecha
      
es una funcion anonima con la nueva sintaxys que nos permite a nosotros declarar
una funcion reemplazando la palabra funcion con =>, se guarda en una CONST

CONST funcionFlecha = ()=>{
    console.log("soy una funcion flecha");
}
funcionFlecha()

particularidad:
    cuando es declarada en una sola linea, el RETUN  esta implicito.ej

    const saludo(mensaje) => mensaje
    console.log(saludo("hola"));

    Y cuando tenemos un solo parametro no necesita (), lo toma igual,
    si son dos o mas si los necesita.ej

   const sumarN(num1, num2) => {
    return num1 + num2;
   }
    console.log(sumarN(3, 4));

*/
