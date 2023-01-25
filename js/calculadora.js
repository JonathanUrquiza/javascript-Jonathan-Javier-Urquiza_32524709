document.title = "Calculadora de sustancias!!!";

const card = document.getElementById('card'),
info = document.getElementById('info');

let nombre = document.createElement('h1');
let simbolo = document.createComment('h2');
let Atomico = document.createElement('h2');
let masico = document.createElement('p');
let grupo = document.createElement('p');

const sustancias = JSON.parse(localStorage.getItem("separado"))
console.log(sustancias);
console.log(info);
console.log(card);


/////////////funciones/////////////
for (const item of sustancias) {

    let html = "";
    //destructuring
      const { nombre, id, simbolo, img} = item;
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
              <button class="btnSend"   id="${simbolo}">Datos</button>
              </form>
              </div>
              </div>
              </div>`;
      card.innerHTML += html;
    }
    const arrayBotones = document.querySelectorAll(".btnBorrar");
    const arrSend = document.querySelectorAll(".btnSend");
    console.log(arrayBotones);
    console.log(arrSend);
    //recorremos el NodeList de botones y le agregamos un evento
    arrayBotones.forEach((btnBorrar) => {
      btnBorrar.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("funciona");
        //Decimos que la variable local va a ser igual al array filtrado
        local = sustancias.filter((el) => el.simbolo != btnBorrar.id);;//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
      });
    });

    arrSend.forEach((btnsend)=>{
        btnsend.addEventListener("click",(e)=>{
            e.preventDefault()
            console.log("funciona");
            let datoSustancia = sustancias.find((el) => el.simbolo == btnsend.id);
            console.log(datoSustancia);
        })
    })
    



/* function sumar(numUno, numDos) {
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
} */