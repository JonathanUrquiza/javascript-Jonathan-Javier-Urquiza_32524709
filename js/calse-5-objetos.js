/*objewtos
let nombres = "fausto";
let edad = 33;
let direccion = "calle falsa 123";
let tel = "12312344";
let nombres = "fausto";
let edad = 33;
let direccion = "calle falsa 123";
let tel = "12341234"*/

//los objetos se declaran siempre como constante.

//objeto literal

const persona = {
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

/*
console.log(persona.tel);
console.log(persona1);

//la funcion constructora, que construye objetos va con F.

function Persona (nombre, edad, telefono, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
}//se llama instaciar un objeto.

const persona2 = new Persona("mariana", 30, "123123123", "hola@hotmmail.com");
console.log(persona1);
const persona3 = new Persona("lore", 22, "1111111", "hola lore");
console.log(persona3);
const persona4 = new Persona("Juan", 25, "123123123", "hola juan" );
console.log(persona4);
*/

//métodos!

let frase = "hay caramba!"
console.log(frase);
console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());
console.log(frase.length);