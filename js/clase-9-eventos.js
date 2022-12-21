const tablaPeriodica = [
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
/*Definir mediante el metodo addEventListener("nombre de evento", funcion de evento) 
recibe dos parametros

let botton = document.getElementById("addCart1")
botton.addEventListener("click",addClick)
function addClick() {
    alert("agregado");
}
*/



/////////////////////////////////////////////////////////////////////
//llama a todos los input del tipo texto
const input = document.querySelectorAll('input[type="text"]'),
bottonSearch = document.querySelector('#btnSearch')
console.log(input);


// eventListener escucha el evento de nombre 'click' y ejecuta la funcion

//bottonSearch.addEventListener('click',(()=>{alert("Hiciste click");}))
/////////////////////////////////////////////////////////////////////

//on-evento

/* 
const input = document.querySelectorAll('input[type="text"]'),
bottonSearch = document.querySelector('#btnSearch')

bottonSearch.onclick = ()=> {
    alert("click click")
} 
*/
///////////////////////////////////////////////////////////////////////

//Ejemplo de listener
/* bottonSearch = document.querySelector('#btnSearch')
console.log(input);

bottonSearch.addEventListener('click',()=>{
    console.log(input[2].value);
    
})

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
*/

select.addEventListener('change',()=>{
    let option = select.options[select.selectedIndex].value
    console.log(option);
    /* info.innerText = `<h2>${option}</h2>`; */
})
//funcion para crear HTML


