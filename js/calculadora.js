document.title = "Calculadora de sustancias!!!";

const card = document.getElementById('card'),
    info = document.getElementById('info');

let nombre = document.createElement('h1');
let simbolo = document.createComment('h2');
let Atomico = document.createElement('h2');
let masico = document.createElement('p');
let grupo = document.createElement('p');
const matematica =[];
const sustancias = JSON.parse(localStorage.getItem("separado"))
console.log(sustancias);
console.log(info);
console.log(card.innerHTML);


/////////////funciones/////////////
for (const item of sustancias) {

    let html = "";
    //destructuring
    const { nombre, id, simbolo, img } = item;
    html =
        `<div class="">
      <div class = "card">
      <h1>${nombre}</h1>
      <div class ="card-title">
      <p>${id}</p> 
      </div>
              <div class="card-content">
              <span class ="card-title">${simbolo}</span>
              <div>
              <img src="../img/${img}" class="card-imge"/>
              </div>
              </div>
              <div>
              <form>
              <button class="btnBorrar" id="${simbolo}">Borrar</button>
              <button class="btnDatos"   id="${simbolo}">Calcular</button>
              </form>
              </div>
              </div>
              </div>`;
    card.innerHTML += html;
}
const arrayBotones = document.querySelectorAll(".btnBorrar");
const arrDatos = document.querySelectorAll(".btnDatos");
console.log(arrayBotones);
console.log(arrDatos);
//recorremos el NodeList de botones y le agregamos un evento
arrayBotones.forEach((btnBorrar) => {
    btnBorrar.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("funciona");
        //Decimos que la variable local va a ser igual al array filtrado
        local = sustancias.filter((el) => el.simbolo != btnBorrar.id);;//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
    });
});

arrDatos.forEach((btndatos) => {
    btndatos.addEventListener("click", (e) => {
        e.preventDefault()
        let datoSustancia = sustancias.find((el) => el.simbolo == btndatos.id);
         matematica.push(datoSustancia.numeroM)
         console.log(matematica);
        /*matematica.forEach((numero) => {

        }*/

         numeroUno = matematica[0];
         numeroDos = matematica[1];
         numeroTres = matematica[2];
          resultado = sumar(numeroUno,numeroDos,numeroTres);
         console.log(resultado);
    })
})


function crearElemento(datoSustancia) {

    let html;
    const { nombre, id, simbolo, numeroM, grupo } = datoSustancia;
    html =
    `<div class="card">
      <div>
        <h1>${nombre}</h1>
      </div>
      <div>
        <h2>${id}</h2> 
      </div>
        <div>
        <span class ="card-title">${simbolo.toUpperCase()}</span>
        <p>grupo:</p>
                <p>${grupo}</p>
                <div>
                <p>numero Masico</p>
                <p>${numeroM}</p>
                </div>
                </div>
                <div>
               
                </div>
                </div>`;
    info.innerHTML += html
}

function sumar(numUno, numDos) {
    return numUno + numDos;
}
/* 

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
} */