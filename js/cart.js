let seleccionados = [];
const app = document.getElementById('app'),
btncomprar = document.getElementById('btncomprar');
btnBuy = document.getElementById('btnBuy'),
btnCalculo = document.getElementById('btnCalculo')


let carrito = JSON.parse(localStorage.getItem("separado"))
console.log(carrito);







//Crear elemento
function addCart(carrito) {

    let html;
    
    html =
    `<div class="">
    <div class = "card">
    <h1>${carrito.nombre}</h1>
          <div class ="card-title">
              <p>${carrito.id}</p> 
          </div>
            <div class="card-content">
              <span class ="card-title">${carrito.simbolo.toUpperCase()}</span>
              <div>
              <img src="../img/${carrito.img}" class="card-imge"/>
              </div>
            </div>
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${carrito.electroNegatividad}</p>
            </div>
            <div>
            <form>
            <button id="add">Agregar al carrito</button>
            <button id="btncomprar">Comprar</button>
            </form></div>
      </div>
  </div>`;
  contenedor.innerHTML += html
  
  
}