//array de objetos


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
        nombre: "Aluminio",
        simbolo: "Al",
        numeroA: 13,
        numeroM: 26.98,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        nombre: "Silicio",
        simbolo: "Si",
        numeroA: 14,
        numeroM: 28.09,
        estadoDeOxidacion: 4,
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
]
/* const div =document.getElementById('app')

let parrafo1 = document.createElement('div')
console.log(parrafo1);
parrafo1.innerHTML="<h1>simbolo</h1><h2>nombre</h2><p>numeroA</p>"

 
//document.body.append(parrafo1)//final de html

div.appendChild(parrafo1)//agrega al elemento padre


 */
let buscar = document.querySelector('input#buscar')



function findQuimi(tablaPeriodica, filtro) {
    const encontrado = tablaPeriodica.find((el) => {
        return el.elemento
    })
    return encontrado;
}

const elEncontrados = findQuimi(tablaPeriodica, buscar)
console.log(elEncontrados);





let producto = { id: 1, nombre: "arroz", precio: 123 };
let concatenado = "ID : " + producto.id + " - producto: " +
    producto.nombre + " $" + producto.precio;
let plantilla = `ID: ${producto.id} - producto ${producto.nombre} $${producto.precio}`;
console.log(concatenado);
console.log(plantilla);













//////////////////////////////////////////////////////////
//busqueda/filtrado por nombre
/* function findQuimi(tablaPeriodica, filtro) {
    const encontrado = tablaPeriodica.find((el)=>{
        return el.nombre.includes(filtro)
    })
    return encontrado;
}
///// *////////////////////////////////////////////////
/* para hacer operaciones
const seleccionado = []

let quimicoA = prompt("seleccione un elemento A")
let quimicoB = prompt("seleccione el elemento B")
seleccionado.push(findQuimi(tablaPeriodica,quimicoA))
seleccionado.push(findQuimi(tablaPeriodica,quimicoB))
console.log(seleccionado);
 */

///////////////////////////////////////////////////////////////////
//busqueda por numeroA

/* function findAtomico(tablaPeriodica, Na) {
    return tablaPeriodica.filter(el => {
        return el.numeroA == Na
    })

}

let buscarAtomico = parseInt(prompt("indique el Numero Atomico del elemento buscado"))
const NaEncontrado = findAtomico(tablaPeriodica, buscarAtomico)
console.log(NaEncontrado);


 */








/////////////////////////////////////////////////////////////////
//Funcion constructora
//agregar elemento quimico

/* function TablaPeriodica(nombre, simbolo, numeroA, numeroM, electroNegatividad, estadoDeOxidacion, grupo) {
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.numeroA = tablaPeriodica.length + 1;
    this.numeroM = parseFloat(numeroM);
    this.estadoDeOxidacion = parseFloat(estadoDeOxidacion);
    this.electroNegatividad = parseInt(electroNegatividad);
    this.grupo = grupo;
}

//////////////////////////////////////////////////////////////////

let opcion = prompt("ingrese \n1 Buscar elemento en la tabla. \n2 Agregar elemento y ver la tabla. \n3 ver tabla completa.");

if (opcion == 1) {

    let buscar = prompt("ingrese el elemento quimico que deseas encontrar")
    const elEncontrados = findQuimi(tablaPeriodica, buscar)
    console.table(elEncontrados);

} else if (opcion == 2) { 

    tablaPeriodica.push(new TablaPeriodica("pera", "Pe", 1333.33, 0, 0, "metal"))
    console.table(tablaPeriodica);

} else if (opcion == 3) {

    const container = document.querySelector(".div")
    for (const obj of tablaPeriodica) {
    container.innerHTML += `nombre:${obj.nombre} simbolo:${obj.simbolo} N° Arómico:${obj.numeroA} N° Masico:${obj.numeroM} grupo:${obj.grupo}`

    }
}  */

//mostrar


