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
        grupo: "gas noble"
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
        numeroM: 16.00,
        estadoDeOxidacion: -2,
        estructuraElectronica: "",
        electroNegatividad: 3.44,
        grupo: "calcógeno",
    },
    {
        elemento: "Flúor",
        simbolo: "F",
        numeroA: 9,
        numeroM: 19.00,
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
]


//busqueda/filtrado por nombre
function findQuimi(tablaPeriodica, filtro) {
    const encontrado = tablaPeriodica.find((el) => {
        return el.elemento.includes(filtro)
    })
    return encontrado;
}

/////////////////////////////////////////////////////////////////
//Funcion constructora
//agregar elemento quimico

class Quimico {
    constructor(elemento, simbolo, numeroM, electroNegatividad, estadoDeOxidacion, grupo) {
        this.elemento = elemento;
        this.simbolo = simbolo;
        this.numeroA = tablaPeriodica.length + 1;
        this.numeroM = parseFloat(numeroM);
        this.estadoDeOxidacion = parseFloat(estadoDeOxidacion);
        this.electroNegatividad = parseInt(electroNegatividad);
        this.grupo = grupo;

    }
}
/////////////////////////////////////////////////////////////////////////////////



//      Calculadora de volumen

/* function calcularSolucion(solvente, soluto) {
    return solvente + soluto;
}
function calcularSoluto(solucion, solvente) {
    return solucion - solvente;
}
function calcularSolvente(solucion, soluto) {
    return solucion - soluto;
}


let operacion = parseInt(prompt("ingrese \n1 para calcular el volumen de la solución, \n2 para calcular el volumen del soluto, \n3 para calcular el volumen del solvente, \n4 para salir"));

let resultado = 0;

do {
    if (operacion == 1) {
        let soluto = parseFloat(prompt("ingrese el volumen del soluto"));
        let solvente = parseFloat(prompt("ingrese el volumen del solvente"))
        resultado = calcularSolucion(solvente, soluto);
        alert(`El resultad de la suma es: ${resultado}`);
    } else if (operacion == 2) {
        let solucion =parseFloat(prompt("ingrse el volumen de la solucion"))
        let solvente = parseFloat(prompt("ingrese el volumen del solvente"))
        resultado = calcularSoluto(solucion, solvente);
        alert(`El resultado de la resta es: ${resultado}`);
    } else if (operacion == 3) {
        let solucion =parseFloat(prompt("ingrse el volumen de la solucion"))
        let soluto = parseFloat(prompt("ingrese el volumen del soluto"));
        resultado = calcularSolvente(solucion, soluto);
        alert(`El resultado de la multiplicación es: ${resultado}`);
    }else {
        alert("la opción seleccionada no existe");
    }  
} while (operacion != 4); */
///////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

let opcion = prompt("ingrese \n1 Buscar elemento en la tabla. \n2 Agregar elemento y ver la tabla. \n3 ver tabla completa.");

if (opcion == 1) {
    
    let buscar = prompt("ingrese el elemento quimico que deseas encontrar")
    const contenedor = document.querySelector(".busca")
    const elEncontrados = findQuimi(tablaPeriodica, buscar)
    contenedor.innerHTML+=  `nombre:${elEncontrados.elemento} simbolo:${elEncontrados.simbolo} N° Arómico:${elEncontrados.numeroA} N° Masico:${elEncontrados.numeroM} grupo:${elEncontrados.grupo}`

} else if (opcion == 2) {

    /*tablaPeriodica.pop() para borrar el ultimo*/

    let elemento = prompt("ingresa el nombre del nuevo elemento")
    let simbolo = prompt("ingresa el simbolo que lo identifica")
    let numeroA = parseInt(prompt("indica cual es su numero atómico"))
    let numeroM = parseInt(prompt("indica cual es su numero de masa"))
    let grupo = prompt("indica a que grupo de la tabla periódica pertenece")
    tablaPeriodica.push(new Quimico(elemento, simbolo, numeroA, numeroM, grupo))
    console.table(tablaPeriodica);
    const agree = document.querySelector(".mostrar")
    for (const muestra of tablaPeriodica) {
        agree.innerHTML += `nombre: ${muestra.elemento} simbolo: ${muestra.simbolo} N° Atómico: ${muestra.numeroA} N° Másico: ${muestra.numeroM}`        
    }
    
 
} else if (opcion == 3) {

    const container = document.querySelector(".div")
    for (const obj of tablaPeriodica) {
        container.innerHTML += `nombre: ${obj.elemento}  `
    
    }
    
} else if (opcion == 4) {

}