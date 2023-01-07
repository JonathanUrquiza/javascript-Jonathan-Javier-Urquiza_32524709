document.title = "2° pre-entrega";
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
  },
];
// input y botones
const input1 = document.getElementById('elementoq')
const inputName = document.getElementById('name'),
  inputSimbol = document.getElementById('simbol'),
  inputAtomic = document.getElementById('atomic'),
  inputMass = document.getElementById('mass'),
  inputGrup = document.getElementById('grup')

const input = document.querySelectorAll('input[type = "text"]')//todos los elementos input, del tipo text
const btnSBuscar = document.getElementById('btnBuscar')//llama a un elemento por ID
const btnagregar = document.getElementById('btnagregar')
const btnver = document.getElementById('btnver')
//muestras
const buscar = document.querySelector(".buscar")
const mostrar = document.querySelector(".mostrar")
const lista = document.getElementById('lista')
let contenedor = document.querySelector("#contenedor");

/////////////////////////FUNCIONES////////////////////////////////////////
//Funcion constructora

function Quimico(nombre, simbolo, id, numeroM, grupo) {
  this.nombre = nombre;
  this.simbolo = simbolo;
  this.id = id;
  this.numeroM = numeroM;
  this.grupo = grupo;

}
//Limpiar campos
function limpiarCampos() {
  return contenedor.innerHTML = "";
}
//busqueda/filtrado por nombre
function findQuimi(arr, filtro) {

  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro)
  });
  return encontrado;
}

//funcion crear
function crearHtml(array) {
 
  let html;

  for (const quimio of array) {
    html =
      `<div class="">
        <div class = "card">
            <div class ="card-title">
                <p>${quimio.nombre}</p>
                <p>${quimio.id}</p> 
            </div>
              <div class="card-content">
                <span class ="card-title">${quimio.simbolo.toUpperCase()}</span>
              </div>
              <div class="card-data">
              <p>electronegatividad</p>
              <p>${quimio.electroNegatividad}</p>
              </div>
        </div>
    </div>`;
    contenedor.innerHTML += html
  }
}


//crearHtml(tablaPeriodica);


//buscar
function buscador(e) {
  e.preventDefault();
  limpiarCampos();
  const encontrado = findQuimi(tablaPeriodica, input1.value)
  const parraf = document.createElement('li')
  crearElemento(encontrado);
  parraf.innerHTML += `nombre:${encontrado.nombre} simbolo:${encontrado.simbolo} N° Atómico:${encontrado.id} N° Masico:${encontrado.numeroM} grupo:${encontrado.grupo}`
  contenedor.appendChild(parraf)
}

btnBuscar.onclick = buscador;


//ver array de objetos
function verArray(e) {
  e.preventDefault();
 limpiarCampos()

  crearHtml(tablaPeriodica);
}
btnver.onclick=verArray

//esto esta mal!
btnagregar.addEventListener('click', (e) => {


  e.preventDefault()
  mostrar.innerHTML = "";

  let nombre = input[1].value;
  let simbolo = input[2].value;
  let id = input[3].value;
  let numeroM = input[4].value;
  let grupo = input[5].value;


  tablaPeriodica.push(new Quimico(nombre, simbolo, id, numeroM, grupo));
  /* for (const agregado of tablaPeriodica) {
    const liagregado = document.createElement('li');
    liagregado.innerHTML = `nombre: ${agregado.nombre} simbolo: ${agregado.simbolo} N° Atómico: ${agregado.id} N° Masico: ${agregado.numeroM} Grupo: ${agregado.grupo}`
    mostrar.appendChild(liagregado)

  } */
  crearHtml(tablaPeriodica);


})
