document.title = "Cart";

const tablaSecundaria = [];
let seleccionados = [];
let listaCart = document.querySelector("#listaCart"),
  btncomprar = document.getElementById('btncomprar');
btnBuy = document.getElementById('btnBuy'),
  btnCalculo = document.getElementById('btnCalculo')


const carrito = JSON.parse(localStorage.getItem("separado"))
console.log(carrito);

/* const [a, b, c, d] = carrito;
console.log(a);
console.log(carrito[0]);
console.log(b);
console.log(c);
console.log(d);
console.log(...carrito);
//console.log(Math.max(...carrito));


 */
function guardarStorage(elemento) {
  return localStorage.setItem('separado', JSON.stringify(elemento))
}


//Crear elemento
function crearHTML(carrito) {
  listaCart.innerHTML = "";
  for (const item of carrito) {

    let html = "";
    //destructuring
      const { nombre, id, simbolo, img, electroNegatividad } = item;
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
              <div class="card-data">
              <p>electronegatividad</p>
              <p>${electroNegatividad}</p>
              </div>
              <div>
              <form>
              <button class="btnBorrar" id="${simbolo}">Borrar</button>
              </form>
              </div>
              </div>
              </div>`;
      listaCart.innerHTML += html;
    }
}
for (const item of carrito) {

  let html = "";
  //destructuring
    const { nombre, id, simbolo, img, electroNegatividad } = item;
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
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${electroNegatividad}</p>
            </div>
            <div>
            <form>
            <button class="btnBorrar" id="${simbolo}">Borrar</button>
            </form>
            </div>
            </div>
            </div>`;
    listaCart.innerHTML += html;
  }

  const arrayBotones = document.querySelectorAll(".btnBorrar");
  console.log(arrayBotones);
  //recorremos el NodeList de botones y le agregamos un evento
  arrayBotones.forEach((btnBorrar) => {
    btnBorrar.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("funciona");
      //Decimos que la variable local va a ser igual al array filtrado
      local = carrito.filter((el) => el.simbolo != btnBorrar.id);;//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
      console.log(local);
      //guardar en el local y pintar html
      guardarStorage(local)
      crearHTML(local)
      //crearHtml(local);
    });
  });


  function crearHtml(arr) {
    tbody.innerHTML = "";
    let html = "";
    for (const item of arr) {
      //destructuring
      const { titulo, autor, isbn, categoria, precio, img } = item;
  
      html = `<tr>
    <td>${titulo}</td>
    <td>${autor}</td>
    <td>${isbn}</td>
    <td>${categoria}</td>
    <td>${precio}</td>
    <td><img src="${img}"/></td>
    <!-- boton borrar class="btn"-->
    <td><button class="btn red" id="${isbn}">Borrar</button></td>
    </tr>`;
      tbody.innerHTML += html;
    }
    //Cargar evento al boton
    //llamo a todos los botones con que esten dentro del td con clase btn
    const arrayBotones = document.querySelectorAll("td .btn");
    
    //recorremos el NodeList de botones y le agregamos un evento
    arrayBotones.forEach((btn) => {
      btn.addEventListener("click", () => {
        //Decimos que la variable local va a ser igual al array filtrado
        local = local.filter((el) => el.isbn != btn.id);//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
        console.log(local);
        //guardar en el local y pintar html
        guardarLS(local);
        crearHtml(local);
      });
    });
  }