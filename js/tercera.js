document.title = "3° pre-entrega";
let tablaPeriodica = [
  //Elemento base
  {
    nombre: "Hidrógeno",
    simbolo: "H",
    id: 1,
    numeroM: 1.008,
    estadoDeOxidacion: 1,
    estructuraElectronica: "1s1",
    electroNegatividad: 2.2,
    grupo: "calcógeno",
    img: "hidrogeno.jpg"
  },
  {
    nombre: "Helio",
    simbolo: "He",
    id: 2,
    numeroM: 4.003,
    estadoDeOxidacion: 0,
    estructuraElectronica: "1s2",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "helio.jpg"
  },
  {
    nombre: "Litio",
    simbolo: "Li",
    id: 3,
    numeroM: 6.968,
    estadoDeOxidacion: 1,
    estructuraElectronica: "1s2 2s1",
    electroNegatividad: 0.93,
    grupo: "metal alcalino",
    img: "litio.png"
  },
  {
    nombre: "Berilio",
    simbolo: "Be",
    id: 4,
    numeroM: 9.012,
    estadoDeOxidacion: 2,
    estructuraElectronica: "1s2 2s2",
    electroNegatividad: 1.57,
    grupo: "alcalinoterreo",
    img: "berilio.jpg"
  },
  {
    nombre: "Boro",
    simbolo: "B",
    id: 5,
    numeroM: 10.81,
    estadoDeOxidacion: 3,
    estructuraElectronica: "1s2 2s2 2p3",
    electroNegatividad: 2.04,
    grupo: "calcógeno",
    img: "boro.jpg"
  },
  {
    nombre: "Carbono",
    simbolo: "C",
    id: 6,
    numeroM: 12.01,
    estadoDeOxidacion: "",
    estructuraElectronica: "1s2 2s2 2p2",
    electroNegatividad: 2.55,
    grupo: "calcógeno",
    img: "carbono.jpg"
  },
  {
    nombre: "Nitrógeno",
    simbolo: "N",
    id: 7,
    numeroM: 14.01,
    estadoDeOxidacion: "",
    estructuraElectronica: "",
    electroNegatividad: 3.04,
    grupo: "calcógeno",
    img: "nitrogeno.jpg"
  },
  {
    nombre: "Oxígeno",
    simbolo: "O",
    id: 8,
    numeroM: 16.0,
    estadoDeOxidacion: -2,
    estructuraElectronica: "",
    electroNegatividad: 3.44,
    grupo: "calcógeno",
    img: "oxigeno.jpg"
  },
  {
    nombre: "Flúor",
    simbolo: "F",
    id: 9,
    numeroM: 19.0,
    estadoDeOxidacion: -1,
    estructuraElectronica: "",
    electroNegatividad: 3.98,
    grupo: "alógenos",
    img: "fluor.jpg"
  },
  {
    nombre: "Neón",
    simbolo: "Ne",
    id: 10,
    numeroM: 20.18,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "neon.jpg"
  },
  {
    nombre: "Sodio",
    simbolo: "Na",
    id: 11,
    numeroM: 22.99,
    estadoDeOxidacion: 1,
    estructuraElectronica: "",
    electroNegatividad: 0.93,
    grupo: "metal alcalino",
    img: "sodio.jpg"
  },
  {
    nombre: "Magnesio",
    simbolo: "Mg",
    id: 12,
    numeroM: 24.31,
    estadoDeOxidacion: 2,
    estructuraElectronica: "",
    electroNegatividad: 1.33,
    grupo: "metal alcalinoterreo",
    img: "magnesio.jpg"
  },
  {
    nombre: "Aluminio",
    simbolo: "Al",
    id: 13,
    numeroM: 26.98,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "aluminio.jpg"
  },
  {
    nombre: "Silicio",
    simbolo: "Si",
    id: 14,
    numeroM: 28.09,
    estadoDeOxidacion: 4,
    estructuraElectronica: "",
    electroNegatividad: 1.61,
    grupo: "Metaloide",
    img: "silicio.jpg"
  },
  {
    nombre: "Fósforo",
    simbolo: "P",
    id: 15,
    numeroM: 30.97,
    estadoDeOxidacion: "+- 3 5",
    estructuraElectronica: "",
    electroNegatividad: 2.19,
    grupo: "calcógeno",
    img: "fosforo.jpg"
  },
  {
    nombre: "Azufre",
    simbolo: "S",
    id: 16,
    numeroM: 32.07,
    estadoDeOxidacion: "+- 2 4 6",
    estructuraElectronica: "",
    electroNegatividad: 2.58,
    grupo: "calcógeno",
    img: "azufre.jpg"
  },
  {
    nombre: "Cloro",
    simbolo: "Cl",
    id: 17,
    numeroM: 35.45,
    estadoDeOxidacion: "+- 1 3 5 7",
    estructuraElectronica: "",
    electroNegatividad: 3.16,
    grupo: "halógeno",
    img: "cloro.jpg"
  },
  {
    nombre: "Argón",
    simbolo: "Ar",
    id: 18,
    numeroM: 39.95,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "argon.jpg"
  },
];
const tablaSecundaria = [];
// input y botones
const input = document.querySelectorAll('input[type = "text"]')//todos los elementos input, del tipo text
const btnBuscar = document.getElementById('btnBuscar');//llama a un elemento por ID
const btnagregar = document.getElementById('btnagregar');
const btnver = document.getElementById('btnver');
//const btnBuy = document.getElementById('btnBuy');
//muestras

let contenedor = document.querySelector("#contenedor");
console.log(input);

/////////////////////////FUNCIONES///////////////////////////////////////////////
//Funcion constructora
function Quimico(nombre, simbolo, id, numeroM, grupo, electroNegatividad) {
  this.nombre = nombre;
  this.simbolo = simbolo;
  this.id = parseInt(id);
  this.numeroM = parseInt(numeroM);
  this.grupo = grupo;
  this.electroNegatividad = parseFloat(electroNegatividad);

}

function guaradarElemento(elemento) {
  return tablaSecundaria.push(elemento)
}

function guardarStorage(elemento) {
  return localStorage.setItem('quimi', JSON.stringify(elemento))
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
function findQuimi(tablaPeriodica, filtro) {

  const encontrado = tablaPeriodica.find((el) => {
    return el.nombre.includes(filtro)
  });
  return encontrado;
}
//crar html
function crearHtml(array) {

  let html;

  for (const quimio of array) {
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
    contenedor.innerHTML += html
  }
}

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
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${encontrado.electroNegatividad}</p>
            </div>
            <div>
            <form>
            <button id="btnCalculo">Agregar a la calculadora</button>
            <button id="btnBuy">Seprar</button>
            </form></div>
            </div>
            </div>`;
  contenedor.innerHTML += html


}


function guardarEnstorage(encontrado) {
  return localStorage.setItem('separado', JSON.stringify(encontrado))
}

//////////////////////EVENTOS//////////////////////////
//bucar elemento quimico
btnBuscar.addEventListener('click', (e) => {
  e.preventDefault();
  const encontrado = findQuimi(tablaPeriodica, input[0].value);
  guaradarElemento(encontrado);
  guardarEnstorage(tablaSecundaria);
  limpiarInner();
  limpiarCampos();
  crearElemento(encontrado);
})
//agregar elemento
btnagregar.addEventListener('click', (e) => {


  limpiarInner();
  e.preventDefault()

  let nombre = input[1].value;
  let simbolo = input[2].value;
  let id = input[3].value;
  let numeroM = input[4].value;
  let grupo = input[5].value;
  let electroNegatividad = input[6].value;


  tablaPeriodica.push(new Quimico(nombre, simbolo, id, numeroM, grupo, electroNegatividad));
  crearHtml(tablaPeriodica);


})
//ver tabla existente
btnver.addEventListener('click', (e) => {
  e.preventDefault()
  limpiarCampos();
  crearHtml(tablaPeriodica);
})



