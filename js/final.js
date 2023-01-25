document.title = "Entrega Final";
let tablaSecundaria = [];
// input y botones
const input = document.querySelectorAll('input[type = "text"]')//todos los elementos input, del tipo text
const btnBuscar = document.getElementById('btnBuscar');//llama a un elemento por ID
const btnagregar = document.getElementById('btnagregar');
const btnver = document.getElementById('btnver');
//const btnBuy = document.getElementById('btnBuy');
//muestras

let contenedor = document.querySelector("#contenedor");
console.log(input);
////////////////////////////FETCH/////////////////////////////////
fetch('../data/data.json')
.then(res=>res.json())
.then(datos=>{

    function findQuimi(datos, filtro) {

        const encontrado = datos.find((el) => {
            return el.nombre.includes(filtro)
        });
        return encontrado;
    }


    function crearHtml(array) {

        let html;
    
        for (const item of array) {
    
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
                      <button class="btnAdd" id="${simbolo}">Agregar al carrito</button>
                      </form>
                      </div>
                      </div>
                      </div>`;
              contenedor.innerHTML += html;
            }
        const arrayBotones = document.querySelectorAll(".btnAdd");
        console.log(arrayBotones);
    
        arrayBotones.forEach((btnAdd) => {
            btnAdd.addEventListener('click', (e)=>{
                e.preventDefault();
                let add = datos.find((el) => el.simbolo == btnAdd.id);
                console.log(add);
                guaradarElemento(add);
                console.log(tablaSecundaria);
                guardarStorage(tablaSecundaria);
                
                
                //guaradarElemento(local);//quizas entre llaves y puntos, desparramando
                //concatenar arrays
            })
        })
    
    }
    
    btnagregar.addEventListener('click', (e) => {
        limpiarInner();
        e.preventDefault()
    
        let nombre = input[1].value;
        let simbolo = input[2].value;
        let id = input[3].value;
        let numeroM = input[4].value;
        let grupo = input[5].value;
        let electroNegatividad = input[6].value;
    
    
        tablaSecundaria.push(new Quimico(nombre, simbolo, id, numeroM, grupo, electroNegatividad));
        crearHtml(tablaSecundaria);
    
    
    })

    btnver.addEventListener('click', (e) => {
        e.preventDefault()
        limpiarCampos();
        crearHtml(datos);
    })

    btnBuscar.addEventListener('click', (e) => {
        e.preventDefault();
        const encontrado = findQuimi(datos, input[0].value);
        limpiarInner();
        limpiarCampos();
        crearElemento(encontrado);
        console.log(encontrado);
    })


})

/////////////////////////FUNCIONES///////////////////////////////////////////////
//Funcion constructora
function Quimico(nombre, simbolo, id, numeroM, grupo, img) {
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.id = parseInt(id);
    this.numeroM = parseInt(numeroM);
    this.grupo = grupo;
    

    img == "" ? (this.img = `https://via.placeholder.com/150`) : (this.img = img);

}

function guaradarElemento(elemento) {
    return tablaSecundaria.push(elemento)
}

function guardarStorage(elemento) {
    return localStorage.setItem('separado', JSON.stringify(elemento))
}
//limpiar inner
function limpiarInner() {
    contenedor.innerHTML = "";
}
//limpiar campos
function limpiarCampos() {

    input[1].value = "";
    input[2].value = "";
    input[3].value = "";
    input[4].value = "";
    input[5].value = "";
    input[6].value = "";

}

//busqueda/filtrado por nombre
/* function findQuimi(datos, filtro) {

    const encontrado = datos.find((el) => {
        return el.nombre.includes(filtro)
    });
    return encontrado;
} */
//crar html para el array
/* function crearHtml(array) {

    let html;

    for (const item of array) {

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
                  <button class="btnAdd" id="${simbolo}">Agregar al carrito</button>
                  </form>
                  </div>
                  </div>
                  </div>`;
          contenedor.innerHTML += html;
        }
    const arrayBotones = document.querySelectorAll(".btnAdd");
    console.log(arrayBotones);

    arrayBotones.forEach((btnAdd) => {
        btnAdd.addEventListener('click', (e)=>{
            e.preventDefault();
            let add = tablaPeriodica.find((el) => el.simbolo == btnAdd.id);
            console.log(add);
            guaradarElemento(add);
            console.log(tablaSecundaria);
            guardarStorage(tablaSecundaria);
            
            
            //guaradarElemento(local);//quizas entre llaves y puntos, desparramando
            //concatenar arrays
        })
    })

}
 */
//Crear elemento
function crearElemento(encontrado) {

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
            <div>
            <form>
            <button id="btnAdd">Agregar</button>
            </div>
            </div>`;
    contenedor.innerHTML += html

    const btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener('click', (e) => {
        e.preventDefault()
        guaradarElemento(encontrado);
        guardarStorage(tablaSecundaria);
    
    })
}


function guardarEnstorage(encontrado) {
    return localStorage.setItem('separado', JSON.stringify(encontrado))
}

//////////////////////EVENTOS//////////////////////////
//bucar elemento quimico
/* btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    const encontrado = findQuimi(datos, input[0].value);
    limpiarInner();
    limpiarCampos();
    crearElemento(encontrado);
    console.log(encontrado);
}) */
//agregar elemento
/* btnagregar.addEventListener('click', (e) => {


    limpiarInner();
    e.preventDefault()

    let nombre = input[1].value;
    let simbolo = input[2].value;
    let id = input[3].value;
    let numeroM = input[4].value;
    let grupo = input[5].value;
    let electroNegatividad = input[6].value;


    tablaSecundaria.push(new Quimico(nombre, simbolo, id, numeroM, grupo, electroNegatividad));
    crearHtml(tablaSecundaria);


}) */
//ver tabla existente
/*  btnver.addEventListener('click', (e) => {
    e.preventDefault()
    limpiarCampos();
    crearHtml(datos);
})
  */


