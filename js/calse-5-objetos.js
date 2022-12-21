/* funciones:
    nos permite encapsular codigo para no volver a
    repetirlo, puede recibir parametro para operar 
    dentro de su estructura, y con retur puede devolver
    un resultado para tranbajar con eso fuera de la funcion.

Objetos: es una funcion constructora, no es paradigma orientado a 
objetos, es una coleccion de datos que tienen algo en comun
ej.

objetos
let nombres = "fausto";
let edad = 33;
let direccion = "calle falsa 123";
let tel = "12312344";

let nombres1 = "faustina";
let edad1 = 33;
let direccion1 = "calle falsa 123";
let tel1 = "12341234"





este metodo complica la acumulacion de datos de cara al 
aumento de las personas, de ahi nace el paradigma de objetos.


*/
//los objetos se declaran siempre como constante.

//objeto literal

const persona = {  //la construccion propia de un objeto
    
  //propiedad : valor determinado
    nombre: "daniel",
    edad: 40,
    tel: 12341234,
    email: "dani@mail.com"
}


const persona1 = {
    nombre: "marina",
    edad: 20,
    tel: 12341232,
}


//console.table(persona);
//console.log(persona);

//acceso a las propiedades del objeto propiedad que no existe,
//devuelve undefined.
/*
notacion de punto:
Se llama al objeto en cuestion y a su propiedad ej
console.log(objeto.propiedad);




        NOTACION DE  PUNTO PARA ACCEDER A LAS PROP.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.tel);
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.tel);

        NOTACION DE [] PARA ACCEDER A LAS PROP.

        notacion de corchete
se llama al objeto en cuestion y al nombre de la propiedad buscada como string ej.


console.log(objeto["nombre de la propiedad"]);
console.log(persona["nombre"]);
console.log(persona1["nombre"]);

///////////////////////////////////////////////

        //ASIGNAR O CAMBIAR LA PROPIEDAD

persona.tel ="1111111111"//REASIGNA UN VALOR CON NOTACION DE PUNTO.
console.log(persona.tel);
console.log(persona1.nombre);
persona1.nombre = "julian"
console.log(persona1.nombre);

        //NOTACION DE []

persona1["edad"]=20
console.log(persona1.edad);
*/
//la funcion constructora, que construye 



/////CREAR PROPIEDAD

persona1.email = "marinaqmail.com"
console.log(persona1);


//objetos va con mayuscula.

function Persona (nombre, edad, telefono, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
        //metodo y llamara al parametro del porpio objeto
        this.saludar = function (){
                console.log("hola me llamo " + this.nombre);

        }
        this.caminar = () =>{
                console.log("caminando");
        }
        this.estudiar = () => {
                console.log("estudiando");                
        }
}//se llama instaciar un objeto.

/*operador this(este), con esto se asegura de hacer referencia al nombre que 
recibe por parametro. 
*/
const persona2 = new Persona ("marina", 30, "12312312333", "marina@mail.com");
console.log(persona2);

///////CREAR UN NUEVO OBJETO DESDE TECLADO
/*
let nombre = prompt("ingresa tu nombre")
let edad = parseInt(prompt("ingresa tu edad"))
let telefono = prompt("ingresa tu telefono")
let email = prompt("ingresa tu email")


const persona3 = new Persona (nombre, edad, telefono, email)
console.log(persona3);
*/
//los objetos que son creados con las funciones constructoras, adnquieren las propiedades que la funcion
//constructora asigna.

/*métodos! son funciones que el objeto puede hacer, no de puede instaciar
si el objeto no esta creado.
el objeto es el console


let frase = "hay caramba!"
console.log(frase);
console.log(frase.toLocaleLowerCase());// hay caramba!
console.log(frase.toUpperCase());//HAY CARAMBA!
console.log(frase.length);//12
//alert es un metodo del objeto window al igual que el prompt
persona3.saludar();
persona3.caminar();
persona3.estudiar();
persona2.saludar();
persona2.caminar();
persona2.estudiar();
*/


//////////////////////////////////////////
//Operador in

console.log("nombre" in persona);
console.log("apellido" in persona);

//BUCLE DE CONSULTA A OBJETOS DE PROPIEDADES.

/*for (const propiedad in persona2) {
        console.log(propiedad + ": " + persona2[propiedad]);
} 
ESTO NOS SIERVE PARA CONSTRUIR ESTRUCTURAS 
COMPLEJAS EN HTML!!!
con esto traigo todos lo atributos de objeto con la funcion for in!
*/

for (const que in persona1) {
        console.log(que + ": " + persona1[que]);
}//persona["nombre"] es lo mismo hasta que no halla mas propiedades

