document.title = "Calculadora de sustancias!!!";

const card = document.getElementById('card'),
    info = document.getElementById('info');
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
              <button class="btnRestar"   id="${simbolo}">Restar</button>
              <button class="btnDatos"   id="${simbolo}">Sumar</button>
              <button class="btnBorrar" id="${simbolo}">Borrar</button>
              </form>
              </div>
              </div>
              </div>`;
    card.innerHTML += html;
}
const arrayRestar = document.querySelectorAll(".btnRestar");
const arrayBotones = document.querySelectorAll(".btnBorrar");
const arrDatos = document.querySelectorAll(".btnDatos");
const btnRest = document.getElementById("btnRest");
console.log(btnRest);

console.log(arrayBotones);
console.log(arrDatos);
console.log(arrayRestar);
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
        guardarElem(datoSustancia)
        resultado = sumar(...matematica);
        console.log(resultado);
        info.innerHTML = `<h1>${resultado}</h1>`
    })
})

arrayRestar.forEach((btnRestar) => {
    btnRestar.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("falta programar la lógica de restar!!!");
        /*   
        let datoSustancia = sustancias.find((el) => el.simbolo == btndatos.id);
         matematica.push(datoSustancia.numeroM) 
         resultadoResta = restar();
         console.log(resultadoResta);
         */
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

function sumar(...param) {
    return param.reduce((acc,el) =>{
        return acc + el
    },0)
}

function restar(...param) {
    return param.reduce((acc, el) =>{
        return el - acc
    },0)
}

function guardarElem(datoSustancia) {
    return  matematica.push(datoSustancia.numeroM)
}

/* 
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