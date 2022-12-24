//objeto función costructora

/*
function Producto(nombre, precio, img, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.img = img;
    this.stock = parseInt(stock);

    this.vender = (cantidad) => {
        if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;
        } else {
            return "Stock insuficiente";
        }
    };
}*/
//Constructor como java class
class Producto{
    constructor(nombre, precio, img, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.img = img;
        this.stock = parseInt(stock);
    }
    //fuera del constructor van los metodos
    vender = (cantidad) => {
        if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;
        } else {
            return "Stock insuficiente";
        }
    };
}


const producto1 = new Producto("arroz", "145", "url", "300")
console.log(producto1.stock);
console.log(producto1.vender(301));
console.log(producto1.stock);



/*
              ARRARY!!!!

Es un tipo de dato que me permite guatrdar diferentes valores
podemos declarar arrays vaicos o con elementos, por regla general,
lo podemos declara como constates,

llaves objetos corchetes arrays

*/
const myArray = []
console.log(myArray);
const myArray2 = [1,2,3,2,-34,19]
console.log(myArray2);
let nombre = "Julian"
const myArray3 = ["Maria", "Lucas", "Laura", "Pedro", nombre]
console.log(myArray3);
const mixto =[1,"Jose", true, 1.4]
console.log(mixto);
//console.table(mixto);
///////////////////////////////////////////////////////////
//para acceder al array desde su posicion
//objeto[posicion]

console.log(myArray2[2]);
console.log(myArray3[3]);

////////////////////////////
//Recorrer un array

/*
for (let i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
    
}
*/
//  Metodo push: me permite agregar elemento al final de array
myArray.push("jose", "pepe", "julieta")
console.log(myArray);
console.log("agrega un objeto al array");

// unshift agrega elementos al principo del array.

myArray.unshift("lara")
console.log(myArray);
console.log("agrega elementos al principio");

// METODO POP: elimina el ultimo objeto!!!

myArray.pop()
console.log(myArray);
console.log("elimina elementos desde el final");

//METODO shift elimina el objeto al principio

myArray.shift()
console.log(myArray);
console.log("elimina objetos desde el principio");

//Agrega elementos especificamente posicionados.

myArray.splice(1, 2)
console.log(myArray);
console.log("elimina desde la posicion 1, el siguiente!!! (1,2)");

//METODO JOIN: pasa las arrais a string

const union = myArray.join("/")
console.log(union);

//CONCAT: sierve para unir array

const concatenado = myArray.concat(myArray2)
console.log(concatenado);

// SLICE star, end desde una posicion especifica hasta otra, no incluida.

const concatenadocopy = concatenado.slice(2, 5)
console.log(concatenadocopy);

//Indexof nos sirve para saber en que posicion se encuetra el elemento
console.log(myArray2.indexOf("maunuel"));

//include este devuelve un valor boolean si esta es true sino false
let busco = prompt("cual") 
myArray3.includes(indexOf(busco))
console.log();

//objeto literar [{clave, valor}]

const Libro= new Producto("harry potter y el pricionero de azcaban",
"2340","img.jpg","20")

//scope global
const Libros=[

{nombre: "harry potter y la piedra filosofal", precio:2340,img:"img.jpg", stock:10},
{nombre: "harry poter y la camara secreta",    precio:3340,img:"img.jpg", stock:15},
Libro
];

console.log(Libros);

//iterar (recorrer) el array con un forof
//Recorre el array y trae cada objeto por separado



//scope local
for (const libro of Libros) {
    console.log(libro);
    console.log(libro.precio);
    console.log(libro.nombre);
}
//////////////////////////////////////////////////////////////////////////////////
const carrito = []
console.log(carrito);

function cargarProductos(arr, producto) {
    arr.push(producto)
}
cargarProductos(Libros, new Producto("steve jobs", 2345, "img.jpg, 1230"))

cargarProductos(carrito, Libro)
cargarProductos(Libros, new Producto("steve jobs", 2345, "img.jpg, 1230"))

console.log(carrito);
for (const libro of Libros) {
    console.log(Libro);
    console.log(Libro.nombre);
    console.log(Libro.precio);
}


/* const nuevosEle = []
nuevosEle.push(new Quimico(nombre, simbolo, numeroA, numeroM, grupo))
const concatenados = tablaPeriodica.concat(nuevosEle)
console.table(concatenados); */