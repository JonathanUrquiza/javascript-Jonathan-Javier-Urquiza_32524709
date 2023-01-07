const formulario = document.querySelector('form'),
checkbox = document.querySelector('check'),
email = document.querySelector('email'),
password = document.querySelector('')





if (user.usuario == "") {
    p.innerText = "todos los campos requerido";
    return;
} else {
    valor === "localStorage" && 
    localStorage.setItem("item", JSON.stringify(user));

    valor === "sessionStorage" &&
    sessionStorage.setItem("item", JSON.stringify(user));
}






//Sugar Syntax

/*sirve para simplificar el codigo cuando son muy largas y extensas*/

//Operador I++
/*Es el equivalemnte a inctrementar de a 1 el valor de I ,
Ej
num = num +1; num++ ó num +=1
///////////////////////////////////////////

Operadores Ternarios
*/
let temperatura = 31;

if (temperatura > 30) {
    alert("dia caluroso")
} else {
    alert("Dia agradable")
}

//Sintaxis del Operadores Ternarios

//Operador Ternario = condicion? ture/ false;


temperatura > 30 ? alert("dia caluroso"): alert("dia agradable");
//pueden ser funciones las condiciones de l true o false
let user ={
    nombre : "jose",
    edad : 18,
    activo : true
}

const user2 = null

/* 
let permiso;
if (user.edad >= 18) {
    permiso = true;
} else {
    permiso = false;
}

if (persimos) {
    console.log("podes apostar");
} else {
    console.log("no podes apostar");
} */

const permiso = user.edad >= 18? true : false;
 permiso ? console.log("podes apostar") : console.log("volve cuando tengas 18");


 ////////////////////////////////////////////////////
//Operador AND: si es verdaddero ejecuta el codigo a la derecha
let carrito = [];

if (carrito.length === 0) {
    console.log("el carrito esta vacio");
}

carrito.length === 0 && console.log("el carrito esta vacio");

const registroIngreso = 
user.activo && `Ingreso el dia ${new Date().toLocaleDateString()}`;
console.log(registroIngreso);

//Operador OR ||: Devuelve el operador 1 (siendo true) o el operador 2 (siendo false)

console.log(user || "el usuario no existe");
console.log(user2.nombre || "el usuario no existe");

/* si el valor es distinto de 0, null, undefined, false, el operador or (||) retorna el operador de lo contrario */

//const carrito = JSON.parse(localStorage.getItem('carrito')) || []


const persona1 = {
    nombre : "jonathan",
    apellido : "rquiza",
    edad : 30,
    manager : { nombre : "homero", apellido: "Simpson"}
};

console.log(persona1.nombre);
console.log(persona1.apellido);

const {nombre, edad, apellido, manager}= persona1;
console.log(nombre);
console.log(apellido);
console.log(manager);

//alias 
const { nombre:NOMBRE, apellido: Apellido }=manager

//id_product:1
console.log(NOMBRE);
console.log(apellido);

/* const destructurador = (obj)=>{
    const {nombre_persona:nombre, apellido}=obj
    console.log(nombre + " " + apellido);
}

destructurador(persona1) */

const destructurador = ({nombre_persona:nombre, apellido})=>{
    
    console.log(nombre + " " + apellido);
}
destructurador(persona1)

let contenedor = document.querySelector(".contenedor");

function crearhtml(arr) {
    let html;
    arr.forEach(element => {
     html = `<div class = "card">
     <div class ="nombre">
     <h1>${el.elemento}</h1>
     <h2>${el.numeroA}</h2>
     <p>${el.numeroM}</p>
     </div>
     <div class="logo">
     <h2>${el.simbolo}</h2>
     </div>
     <div>
     <p>${el.electronegatividad}</p>
     </div>
     </div>`;
     contenedor.innerHTML+= html;
    });
}
crearhtml(tablaPeriodica);