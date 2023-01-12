let seleccionados = [];
const app = document.getElementById('app'),
btncomprar = document.getElementById('btncomprar');
btnBuy = document.getElementById('btnBuy'),
btnCalculo = document.getElementById('btnCalculo')








//Crear elemento
function addCart(encontrado) {

    let html;
    
    html =
    `<div class="">
    <div class = "card">
    <h1>${encontrado.nombre}</h1>
          <div class ="card-title">
              <p>${encontrado.id}</p> 
          </div>
            <div class="card-content">
              <span class ="card-title">${encontrado.simbolo.toUpperCase()}</span>
              <div>
              <img src="../img/${encontrado.img}" class="card-imge"/>
              </div>
            </div>
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${encontrado.electroNegatividad}</p>
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