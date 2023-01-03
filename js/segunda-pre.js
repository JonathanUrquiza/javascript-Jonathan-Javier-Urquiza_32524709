document.title = "2° pre-entrega";
let tablaPeriodica = [
    //Elemento base
    {
        elemento: "Hidrógeno",
        simbolo: "H",
        numeroA: 1,
        numeroM: 1.008,
        estadoDeOxidacion: 1,
        estructuraElectronica: "1s1",
        electroNegatividad: 2.2,
        grupo: "calcógeno",
    },
    {
        elemento: "Helio",
        simbolo: "He",
        numeroA: 2,
        numeroM: 4.003,
        estadoDeOxidacion: 0,
        estructuraElectronica: "1s2",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        elemento: "Litio",
        simbolo: "Li",
        numeroA: 3,
        numeroM: 6.968,
        estadoDeOxidacion: 1,
        estructuraElectronica: "1s2 2s1",
        electroNegatividad: 0.93,
        grupo: "metal alcalino",
    },
    {
        elemento: "Berilio",
        simbolo: "Be",
        numeroA: 4,
        numeroM: 9.012,
        estadoDeOxidacion: 2,
        estructuraElectronica: "1s2 2s2",
        electroNegatividad: 1.57,
        grupo: "alcalinoterreo",
    },
    {
        elemento: "Boro",
        simbolo: "B",
        numeroA: 5,
        numeroM: 10.81,
        estadoDeOxidacion: 3,
        estructuraElectronica: "1s2 2s2 2p3",
        electroNegatividad: 2.04,
        grupo: "calcógeno",
    },
    {
        elemento: "Carbono",
        simbolo: "C",
        numeroA: 6,
        numeroM: 12.01,
        estadoDeOxidacion: "",
        estructuraElectronica: "1s2 2s2 2p2",
        electroNegatividad: 2.55,
        grupo: "calcógeno",
    },
    {
        elemento: "Nitrógeno",
        simbolo: "N",
        numeroA: 7,
        numeroM: 14.01,
        estadoDeOxidacion: "",
        estructuraElectronica: "",
        electroNegatividad: 3.04,
        grupo: "calcógeno",
    },
    {
        elemento: "Oxígeno",
        simbolo: "O",
        numeroA: 8,
        numeroM: 16.0,
        estadoDeOxidacion: -2,
        estructuraElectronica: "",
        electroNegatividad: 3.44,
        grupo: "calcógeno",
    },
    {
        elemento: "Flúor",
        simbolo: "F",
        numeroA: 9,
        numeroM: 19.0,
        estadoDeOxidacion: -1,
        estructuraElectronica: "",
        electroNegatividad: 3.98,
        grupo: "alógenos",
    },
    {
        elemento: "Neón",
        simbolo: "Ne",
        numeroA: 10,
        numeroM: 20.18,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        elemento: "Sodio",
        simbolo: "Na",
        numeroA: 11,
        numeroM: 22.99,
        estadoDeOxidacion: 1,
        estructuraElectronica: "",
        electroNegatividad: 0.93,
        grupo: "metal alcalino",
    },
    {
        elemento: "Magnesio",
        simbolo: "Mg",
        numeroA: 12,
        numeroM: 24.31,
        estadoDeOxidacion: 2,
        estructuraElectronica: "",
        electroNegatividad: 1.33,
        grupo: "metal alcalinoterreo",
    },
    {
        elemento: "Aluminio",
        simbolo: "Al",
        numeroA: 13,
        numeroM: 26.98,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
    {
        elemento: "Silicio",
        simbolo: "Si",
        numeroA: 14,
        numeroM: 28.09,
        estadoDeOxidacion: 4,
        estructuraElectronica: "",
        electroNegatividad: 1.61,
        grupo: "Metaloide",
    },
    {
        elemento: "Fósforo",
        simbolo: "P",
        numeroA: 15,
        numeroM: 30.97,
        estadoDeOxidacion: "+- 3 5",
        estructuraElectronica: "",
        electroNegatividad: 2.19,
        grupo: "calcógeno",
    },
    {
        elemento: "Azufre",
        simbolo: "S",
        numeroA: 16,
        numeroM: 32.07,
        estadoDeOxidacion: "+- 2 4 6",
        estructuraElectronica: "",
        electroNegatividad: 2.58,
        grupo: "calcógeno",
    },
    {
        elemento: "Cloro",
        simbolo: "Cl",
        numeroA: 17,
        numeroM: 35.45,
        estadoDeOxidacion: "+- 1 3 5 7",
        estructuraElectronica: "",
        electroNegatividad: 3.16,
        grupo: "halógeno",
    },
    {
        elemento: "Argón",
        simbolo: "Ar",
        numeroA: 18,
        numeroM: 39.95,
        estadoDeOxidacion: 0,
        estructuraElectronica: "",
        electroNegatividad: 0,
        grupo: "gas noble",
    },
];
// input y botones
const input1 = document.getElementById("elementoq");
const inputName = document.getElementById("name"),
    inputSimbol = document.getElementById("simbol"),
    inputAtomic = document.getElementById("atomic"),
    inputMass = document.getElementById("mass"),
    inputGrup = document.getElementById("grup");

const input = document.querySelectorAll('input[type = "text"]'); //todos los elementos input, del tipo text
const btnSearch = document.getElementById("btnSearch"); //llama a un elemento por ID
const btnmostrar = document.getElementById("btnmostrar");
const btnver = document.getElementById("btnver");
//muestras
const buscar = document.querySelector(".buscar");
const mostrar = document.querySelector(".mostrar");
const lista = document.getElementById("lista");
console.log(input);
//FUNCIONES//
//Funcion constructora
class Quimico {
    constructor(elemento, simbolo, numeroA, numeroM, grupo) {
        this.elemento = elemento;
        this.simbolo = simbolo;
        this.numeroA = numeroA;
        this.numeroM = numeroM;
        this.grupo = grupo;
    }
}
//busqueda/filtrado por nombre
function findQuimi(arr, filtro) {
    const encontrado = arr.find((el) => {
        return el.elemento.includes(filtro);
    });
    return encontrado;
}

function buscador(e) {
    e.preventDefault();

    const encontrado = findQuimi(tablaPeriodica, input[1].value, input[2].value);
    const parraf = document.createElement("li");
    parraf.innerHTML += `nombre:${encontrado.elemento} simbolo:${encontrado.simbolo} N° Atómico:${encontrado.numeroA} N° Masico:${encontrado.numeroM} grupo:${encontrado.grupo}`;
    buscar.appendChild(parraf);
}
//ver array de objetos
function verArray(e) {
    e.preventDefault();
    for (const obj of tablaPeriodica) {
        const li = document.createElement("li");
        li.innerHTML = `nombre: ${obj.elemento} simbolo: ${obj.simbolo} N° Atómico: ${obj.numeroA} N° Masico: ${obj.numeroM} Grupo: ${obj.grupo}`;
        lista.appendChild(li);
    }
}
//ver
btnmostrar.addEventListener("click", (e) => {
    e.preventDefault();
    let elemento = input[1].value;
    let simbolo = input[2].value;
    let numeroA = input[3].value;
    let numeroM = input[4].value;
    let grupo = input[5].value;
  
    tablaPeriodica.push(new Quimico(elemento, simbolo, numeroA, numeroM, grupo));
    for (const agregado of tablaPeriodica) {
      const li = document.createElement("li");
      li.innerHTML = `nombre: ${agregado.elemento} simbolo: ${agregado.simbolo} N° Atómico: ${agregado.numeroA} N° Masico: ${agregado.numeroM} Grupo: ${agregado.grupo}`;
      mostrar.appendChild(li);
    }
  });
  
///////////////////////////EVENTOS//////////////////////////////////
btnSearch.onclick = buscador;
btnver.onclick = verArray;
