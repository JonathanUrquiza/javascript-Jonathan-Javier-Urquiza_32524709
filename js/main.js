//Pre-entrega 1


//ingreso de información

nombre =prompt("ingrese su nombre");
edad = parseInt(prompt("ingrese su edad"));
edadMin = 18;

//proceso
difEdad = 18 - edad;

//condicion
if (edad >= 0) {
    if (edad >= 18) {
        alert("Bienvenido " + nombre + " eres mayor, puedes pasar al casino.");
    } else {
        alert(`hola ${nombre} no, no pasás, sos menor de edad, Te faltan ${difEdad} para entrar.`);
    }
} else {
    alert(edad + " no es una edad válida.");
}
//fin del codigo