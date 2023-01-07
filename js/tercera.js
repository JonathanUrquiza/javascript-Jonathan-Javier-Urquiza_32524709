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
      img:"hidrogeno.jpg"
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
      img:"helio.jpg"
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
      img:"litio.png"
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
      img:"berilio.jpg"
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
      img:"boro.jpg"
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
      img:"carbono.jpg"
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
      img:"nitrogeno.jpg"
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
      img:"oxigeno.jpg"
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
      img:"fluor.jpg"
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
      img:"neon.jpg"
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
      img:"sodio.jpg"
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
      img:"magnesio.jpg"
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
      img:"aluminio.jpg"
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
      img:"silicio.jpg"
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
      img:"fosforo.jpg"
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
      img:"azufre.jpg"
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
      img:"cloro.jpg"
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
      img:"argon.jpg"
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
const btnBuscar = document.getElementById('btnBuscar')//llama a un elemento por ID
const btnagregar = document.getElementById('btnagregar')
const btnver = document.getElementById('btnver')
//muestras
const buscar = document.querySelector(".buscar")
const mostrar = document.querySelector(".mostrar")
const lista = document.getElementById('lista')
let contenedor = document.querySelector("#contenedor");

/////////////////////////FUNCIONES///////////////////////////////////////////////

//Funcion constructora

function Quimico(nombre, simbolo, id, numeroM, grupo, img) {
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.id = id;
    this.numeroM = numeroM;
    this.grupo = grupo;
    this.img = img;

}
//limpiar campos
function limpiarCampos() {
    contenedor.innerHTML = "";
}
//busqueda/filtrado por nombre
function findQuimi(arr, filtro) {

    const encontrado = arr.find((el) => {
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
      </div>
  </div>`;
  contenedor.innerHTML += html
  
  
}


//////////////////////EVENTOS//////////////////////////


//bucar elemento quimico
btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarCampos();
    const encontrado = findQuimi(tablaPeriodica, input1.value);
    console.log(encontrado);
    crearElemento(encontrado);
})
//agregar elemento
btnagregar.addEventListener('click', (e) => {


    e.preventDefault()
    contenedor.innerHTML = "";
  
    let nombre = input[1].value;
    let simbolo = input[2].value;
    let id = input[3].value;
    let numeroM = input[4].value;
    let grupo = input[5].value;
    let img = input[6].value;
  
  
    tablaPeriodica.push(new Quimico(nombre, simbolo, id, numeroM, grupo, img));
    crearHtml(tablaPeriodica);
  
  
  })
//ver tabla existente
btnver.addEventListener('click',(e)=>{
    e.preventDefault()
    limpiarCampos();
    crearHtml(tablaPeriodica);
})



/* //<img src="./img/${img}" alt="">
           <img src="../img/elementosperiodicos/${encontrado.img}" alt="">
caja.addEventListener('mouseleave', ()=>{
  caja.style.backgroundImage= 'url("./img/australia.jpg")'
  pais.innerHTML="<h2>Australia</h2>"
 */