let seleccionados = [];
let listaCart = document.querySelector("#listaCart"),
btncomprar = document.getElementById('btncomprar');
btnBuy = document.getElementById('btnBuy'),
btnCalculo = document.getElementById('btnCalculo')


const carrito = JSON.parse(localStorage.getItem("separado"))
console.log(carrito);







//Crear elemento
for (const quimio of carrito) {
  let html;

  html =
    `<div class="">
    <div class = "card">
    <h1>${quimio.nombre}</h1>
    <div class ="card-title">
    <p>${quimio.id}</p> 
    </div>
            <div class="card-content">
            <span class ="card-title">${quimio.simbolo.toUpperCase()}</span>
            <div>
            <img src="../img/${quimio.img}" class="card-imge"/>
            </div>
            </div>
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${quimio.electroNegatividad}</p>
            </div>
            <div>
            <form>
            <button id="add">Agregar al carrito</button>
            <button id="comprar">Seprar</button>
            </form></div>
            </div>
            </div>`;
  listaCart.innerHTML += html
}