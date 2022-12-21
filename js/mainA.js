//          Tabla Periódica
//alert("bienvenido a la tabla periódica!!!!")
let tablaPeriodica = [
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
]

/* let total = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

console.log(tablaPeriodica);


class Elemento {
    constructor(nombre, simbolo, numeroA) {
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.numeroA = numeroA;
    }
}
nombre = prompt("asigne un nombre")
tablaPeriodica.push(nombre)
console.log(tablaPeriodica);
/* function TablaPeriodica (nombre, simbolo, numeroA, numeroM, grupo, electroNegatividad, estadoDeOxidacion) {
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.numeroA = numeroA;
    this.numeroM = numeroM;
    this.estadoDeOxidacion = estadoDeOxidacion;
    this.electroNegatividad = electroNegatividad;
    this.grupo = grupo;
}
const TablaPeriodica = new TablaPeriodica(prompt("ingrese un nombre"),prompt("ingrese el simbolo representativo"));
console.log(elemento);
console.log(tablaPeriodica);
 */



/* 
consultarInfo();
    consultarLaPrimera();
        buscar el primer obj
    consultarCualquiera();
        buscar un obj
    consultarLaUltima();
        buscar el ultimo obj
agregarInfo();
    agregarAlPrincipio();
    agregarAlFinal();
calcularInteracciones();
    calcularSoluciones();
    calcularMasa();
    
*/
////////////////////////////////////////////////

/* 
switch (key) {
    case 1:
        consultarInfo();
        if ( consulta = 1) {
            buscarElPrimero()
        } else if (consulta = 2) {
            buscar()
        } else if (consulta = 3) {
            buscarElUltimo()
        } else {
            alert("opción incorrecta!")
        }
        break;
    case 2:
        agregarInfo();
        if (opcion = 1) {
            agregarAlPrincipio();
        } else if (opcion = 2) {
            agregarAlFinal();
        } else {
            alert("opcion incorrecta")
        }
        break
    case 3:
        calcularInteracciones();
        break
    default:
        break;
} */

for (let i = 0; i < ; i++) {
    
    
}