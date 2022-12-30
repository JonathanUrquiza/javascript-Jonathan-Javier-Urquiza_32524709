/*const tablaPeriodica = [
    //Elemento base
    {
        nombre: "Hidrógeno",
        simbolo: "H",
        numeroA: 1,
        numeroM: 1.008,
        estadoDeOxidacion: 1,
        estructuraElectronica: "1s1",
        electroNegatividad: 2.2,
        grupo: "calcógeno",
    },
    {
        nombre: "Helio",
        simbolo: "He",
        numeroA: 2,
        numeroM: 4.003,
        estadoDeOxidacion: 0,
        estructuraElectronica: "1s2",
        electroNegatividad: 0,
        grupo: "gas noble"
    },
    {
        nombre: "Litio",
        simbolo: "Li",
        numeroA: 3,
        numeroM: 6.968,
        estadoDeOxidacion: 1,
        estructuraElectronica: "1s2 2s1",
        electroNegatividad: 0.93,
        grupo: "metal alcalino",
    },
    {
        nombre: "Berilio",
        simbolo: "Be",
        numeroA: 4,
        numeroM: 9.012,
        estadoDeOxidacion: 2,
        estructuraElectronica: "1s2 2s2",
        electroNegatividad: 1.57,
        grupo: "alcalinoterreo",
    },
]

document.title = "EVENTOS"

//Son la manera de poder capturar lo que el usuario hace en la pagina
Definir mediante el metodo addEventListener("nombre de evento", funcion de evento) 
recibe dos parametros

let botton = document.getElementById("addCart1")
botton.addEventListener("click",addClick)
function addClick() {
    alert("agregado");
}




/////////////////////////////////////////////////////////////////////
//llama a todos los input del tipo texto
const input = document.querySelectorAll('input[type="text"]'),
//llama al btnSearch especificamente
bottonSearch = document.querySelector('#btnSearch')
console.log(input);


// eventListener escucha el evento de nombre 'click' y ejecuta la funcion

bottonSearch.addEventListener('click',(()=>{
    alert("Hiciste click");
}))

/////////////////////////////////////////////////////////////////////

//on-evento

/* 
const input = document.querySelectorAll('input[type="text"]'),
bottonSearch = document.querySelector('#btnSearch')

bottonSearch.onclick = ()=> {
    alert("click click")
} 

///////////////////////////////////////////////////////////////////////

//Ejemplo de listener
bottonSearch = document.querySelector('#btnSearch')
console.log(input);

bottonSearch.addEventListener('click',()=>{
    console.log(input[2].value);
    
})
//evento
nombre = document.querySelector("h1#nombre")
nombre.innerHTML = `${input[0].value}`
btnSearch.addEventListener('click',()=> {
    nombre.innerHTML = `${input[0].value}`;

} ) 

////////////////////////////////////////////////////////


Evento mousemove
Evento mouseup
Evento mousedown

 
 const caja = document.querySelector('.caja'),
 pais = document.querySelector('#pais')
 
caja.addEventListener('mouseleave',()=> {
    caja.getElementsByClassName.bacgroundImage= 'url("ruta relativa de la imagen")'
    pais.innerHTML="<h2>Australia</h2>"
})
    
caja.addEventListener('mouseover',()=> {
    caja.getElementsByClassName.bacgroundImage= 'url("ruta relativa de la imagen")'
    pais.innerHTML="<h2>Estados</h2>"
})
    

const nombre = input[0]
const apellido = input[1]
console.log(nombre);
console.log(edad);

nombre.addEventListener('keyup',()=>{
    console.log("soltaste la tecla");
})
apellido.addEventListener('keydown',()=>{
    info.innerText = apellido.value;
})

////////////////////////////////////////////////////////////////////
//agrega opciones al html!!!
const select = document.querySelector('select[name="paises"]');

tablaPeriodica.forEach((el) => {
    let option = document.createElement('option');
    option.innerText = el.nombre;
    option.value = el;
    select.appendChild(option)
}) 

//change event


 select.addEventListener('change',()=>{
    let option = select.options[select.selectedIndex].value
    console.log(option);
    info.innerText = `<h2>${option}</h2>`; 
})




//funcion para crear HTML

 const formulario = querySelector('form')
function validar(params) {
    //logica de validacion
} */

//las opciones convienen con select!


document.title = "clase 9 | EVENTOS"
//querySelector
const titulo = document.querySelector("h1 span"),
tituloSecundario = document.querySelector("h2#secundario");

titulo.index = "clase 9";
tituloSecundario.innerText = "eventos"
//array Servicios

const servicios = [
    { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
    { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
    { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
    { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
    { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
    { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
    { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
    {
        id: 8,
        nombre: "radiofrecuencia",
        precio: 12800,
        img: "radiofrecuencia.png",
    },
    {
        id: 9,
        nombre: "micropigmentación",
        precio: 7800,
        img: "micropigmentacion.jpeg",
    },
];
const paises = [
    "Argentina",
    "Colombia",
    "Brasil",
    "Mexico",
    "Uruguay",
    "Venezuela",
    "Perú",
    "Chile",
    "Polonia",
    "Francia",
];
//funciones de busqueda
function buscarServicio(arr, filtro) {
    const encontrado = arr.find((el) => {
      return el.nombre.includes(filtro);
    });
    return encontrado;
}

function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
}


//EVENTOS
const input = document.querySelectorAll('input[type = "text"]'),
    btnSearch = document.querySelector('#btnSearch')
//console.log(input[0]);


//eventListener(evento, funcion)Ej 1
btnSearch.addEventListener('click', () => {
    console.log("hicieste click en el boton");
})


/* 
//eventListener(evento,funcion)Ej 2
function hacerClick() {
    console.log("hicieste click en el boton");
}
btnSearch.addEventListener('click', hacerClick)

//envento con prfefijo, onevento!

btnSearch.onclick = ()=>{
    console.log("hicieste click en el boton");
}
input[0].addEventListener('click',()=>{
    console.log("hicieste click en el boton");
})
*/

//sirve para reemplazar el prompt!!!
/* btnSearch.addEventListener('click', () => {
    console.log(input[0].value);
    //tituloSecundario.innerText=input[0].value
    tituloSecundario.innerText = `hola ${input[0].value}`
})
 */
//mouse event

const caja = document.querySelector('.caja'),
    pais = document.querySelector('#pais'),
    info = document.getElementById('info')
/* 
caja.addEventListener('mouseleave',()=>{
    caja.style.backgroundImage= 'url("../img/australia.jpg")'
    pais.innerHTML="<h2>Australia</h2>"
})
caja.addEventListener('mouseover',()=>{
    caja.style.backgroundImage= 'url("../img/estados.jpg")'
    pais.innerHTML="<h2>Estados</h2>"
})
caja.addEventListener('click',()=>{
    caja.style.backgroundImage= 'url("../img/australia.jpg")'
    pais.innerHTML="<h2>Piña</h2>"
}) */

const nombre = input[1]
const edad = input[2]
console.log(nombre);
console.log(edad);

nombre.addEventListener('keyup', () => {
    console.log("soltaste la tecla");
})

//calculadora con interface grafica
edad.addEventListener('keyup', () => {
    info.innerText = edad.value;
})

//evento change
//llamar al select
const select = document.querySelector('select[name = "paises"]');


paises.forEach((pais)=>{
    let option = document.createElement('option');
    option.innerText = pais;
    option.value = pais;
    select.appendChild(option)
  })


  //change
//selector de opciones!! con el de arriba!!!
select.addEventListener('change',()=>{
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    info.innerHTML = `<h2>${option}</h2>`;
})

//funcion que busca y muestra!!!
btnSearch.addEventListener('click', () => {
    const encontrado = buscarServicio(servicios,input[0].value.toLowerCase())
    console.log(encontrado);
    const h1 =document.createElement('h1')
    contenedor.appendChild(h1)
    h1.innerHTML = encontrado;
})



//funcion Crear HTML

function crearHtml(el){
    //llamo a un elemento contenedor 
    const contenedor= document.querySelector('#contenedor')
    //creo una variable con un estuctura html
    let html= `<div class="card">
                  <img src=" ./img/${el.img}" alt="${el.nombre}">
                  <hr>
                  <h3>${el.nombre}</h3>
                  <p>Precio: $${el.precio} </p>
                    <div class="card-action">
                      <button id="">Comprar</button>
                    </div>
                </div>`;
  //se la agrego al contenedor
  contenedor.innerHTML = html;
  }