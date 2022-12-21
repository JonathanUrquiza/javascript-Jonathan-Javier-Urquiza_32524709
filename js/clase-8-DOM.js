//MANEJO DEL DOM

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
    {
        nombre: "Boro",
        simbolo: "B",
        numeroA: 5,
        numeroM: 10.81,
        estadoDeOxidacion: 3,
        estructuraElectronica: "1s2 2s2 2p3",
        electroNegatividad: 2.04,
        grupo: "calcógeno",
    },
    {
        nombre: "Carbono",
        simbolo: "C",
        numeroA: 6,
        numeroM: 12.01,
        estadoDeOxidacion: "",
        estructuraElectronica: "1s2 2s2 2p2",
        electroNegatividad: 2.55,
        grupo: "calcógeno",
    },
    {
        nombre: "Nitrógeno",
        simbolo: "N",
        numeroA: 7,
        numeroM: 14.01,
        estadoDeOxidacion: "",
        estructuraElectronica: "",
        electroNegatividad: 3.04,
        grupo: "calcógeno",
    },
    {
        nombre: "Oxígeno",
        simbolo: "O",
        numeroA: 8,
        numeroM: 16.00,
        estadoDeOxidacion: -2,
        estructuraElectronica: "",
        electroNegatividad: 3.44,
        grupo: "calcógeno",
    },
    {
        nombre: "Flúor",
        simbolo: "F",
        numeroA: 9,
        numeroM: 19.00,
        estadoDeOxidacion: -1,
        estructuraElectronica: "",
        electroNegatividad: 3.98,
        grupo: "alógenos",
    },
    {
        nombre: "Neón",
        simbolo: "Ne",
        numeroA: 10,
        numeroM: 20.18,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        nombre: "Sodio",
        simbolo: "Na",
        numeroA: 11,
        numeroM: 22.99,
        estadoDeOxidacion: 1,
        estructuraElectronica: "",
        electroNegatividad: 0.93,
        grupo: "metal alcalino",
    },
    {
        nombre: "Magnesio",
        simbolo: "Mg",
        numeroA: 12,
        numeroM: 24.31,
        estadoDeOxidacion: 2,
        estructuraElectronica: "",
        electroNegatividad: 1.33,
        grupo: "metal alcalinoterreo",
    },
    {
        nombre: "Neón",
        simbolo: "Ne",
        numeroA: 10,
        numeroM: 20.18,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        nombre: "Aluminio",
        simbolo: "Al",
        numeroA: 14,
        numeroM: 26.98,
        estadoDeOxidacion: 3,
        estructuraElectronica: "",
        electroNegatividad: 1.61,
        grupo: "Metaloide",
    },
    {
        nombre: "Fósforo",
        simbolo: "P",
        numeroA: 15,
        numeroM: 30.97,
        estadoDeOxidacion: "+- 3 5",
        estructuraElectronica: "",
        electroNegatividad: 2.19,
        grupo: "calcógeno",
    },
    {
        nombre: "Azufre",
        simbolo: "S",
        numeroA: 16,
        numeroM: 32.07,
        estadoDeOxidacion: "+- 2 4 6",
        estructuraElectronica: "",
        electroNegatividad: 2.58,
        grupo: "calcógeno",
    },
    {
        nombre: "Cloro",
        simbolo: "Cl",
        numeroA: 17,
        numeroM: 35.45,
        estadoDeOxidacion: "+- 1 3 5 7",
        estructuraElectronica: "",
        electroNegatividad: 3.16,
        grupo: "halógeno",
    },
    {
        nombre: "Argón",
        simbolo: "Ar",
        numeroA: 18,
        numeroM: 39.95,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
];
const personas = ["pedro", "jose","juan", "lucia","emiliano","Belen"];


//CLASE DATE

/* const fecha = new Date()
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDay());
console.log(fecha.getToLocaleString());
console.log(fecha); */

//Modelo de objetos de documento (DOM)

/* es una estructura de objetos generada por el navegador, la cual representa la 
pagina html actual. Llamados nodos! ej.

<div><p></p></div>
la etiqueta <p></p> es hijo del nodo <dov></dov>
document.body llama al nodo padre body con la notacion de punto


NODO ELEMENTO: etiqueta.

objeto.metodo.(objeto.atributos/metodos)
console.dir(document.head)
console.dir(document.body);
*/
//////////////////////////////////////////

//acceso al nodo se guarda en const

const div = document.getElementById('app')
const parrafo = document.getElementById('parrafo')
const itemPais = document.getElementsByClassName('pais')
console.log(div); //lee el nodo completo
console.log(parrafo); //lee lo que esta en el nodo hijo
console.log(parrafo.innerHTML);//lee lo que esta en todo el html


//llama a cada uno de los elementos que estan dentro de esta classname
/* console.log(itemPais);
console.log(itemPais[0].innerHTML);
console.log(itemPais[1].innerHTML);
console.log(itemPais[2].innerHTML);
console.log(itemPais[3].innerHTML);
console.log(itemPais[4].innerHTML);
console.log(itemPais[5].innerHTML); */

////////////////////////////////
//TAGNAME 
//Trae los nodos segun la etiqueta que tenga, se comporta como un array 

for (const pais of itemPais) {
    console.log(pais.innerText);
}//lo puedo modificar

//innerText= copia literal la lineas con la etiqueta incluida!
//parrafo.innerText = "estoy mostrando info desde JS!!"

//innerHTML= crea etiquetas html y se ven reflejadas en el van
parrafo.innerHTML = "<h1>Clase 8 - DOM</h1>"


/////////////////////////////////////////////

//clasename permite agregar a cualquier nodo que yo haya accedido anteriormente
//agragar una clase que nos permite a travez de un condicional pueda ser modificado

parrafo.className = "red";
//////////////////////////////////////////
//Crear elemenetos

let parrafo1 = document.createElement('p')
parrafo1.innerHTML= "<h3>soy un titulo</h3>"

//tabla periodica agregado al html al fianl
let aprte = document.createElement('div')
console.log(div);
aprte.innerHTML = "<h1>nombre</h1>"
document.body.append(aprte)


// agregar a un contenedor esecifico como hijos
/* obviamente se repite
let aprte = document.createElement('div')
aprte.innerHTML = "<h1>nombre</h1>" */
div.appendChild(aprte)



////////////////////////////////////////


//añade al final
document.body.append(parrafo1);


//añade al top del nodo

/*para incluirlo en app, tengo que llamarlo antes en 
const div = document.getElementById('app') */

div.appendChild(parrafo1)
//////////////////////////////////////////////

//remover

//parrafo1.remove()
//itemPais[3].remove()

//////////////////             /////////////////

//const tabla = document.querySelector('')

const lista = document.querySelector('ul.lista#nombres')

for (const Elemento of tablaPeriodica) {
    console.log(Elemento);
    const li = document.createElement('li')


    li.innerHTML = Elemento.nombre;
    lista.appendChild(li)
    
}
//peronas
/* 

for (const persona of personas) {
    console.log(persona);
    const li = document.createElement('li')

    li.innerHTML = persona;
    lista.appendChild(li)
} */




//////////////////////////////////////////////////

/*Plantillas literales son los backtics `` */

const contenedor = document.querySelector("div")
for (const objeto of tablaPeriodica) {
    contenedor.innerHTML = `id: ${objecto.nombre} - 
    objeto ${objeto.simbolo}
    ${objecto.numeroA}`;
}