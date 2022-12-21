function CalcularPedidos() {


}







//solicitar al usuario que ingrese el producto que desea comprar.
let usuario = "Mpiafe";


let login = prompt("Ingresa tu usuario")

if (usuario === login) {

    let cantidad = 0;

    function calcularPedido(cantidad, precio) {
        if (cantidad >= 1) {
            cantidad = cantidad++;
            alert("sumaste" + " " + cantidad + " " + "producto/s" + " " + "a tu carrito de compras");
            let resultado = cantidad * precio;
            return alert("El total de tu compra es $" + " " + resultado);
        }
    }

    let opciones = prompt(
        "Elegi la/s bebida/s que queres comprar: \n1- Fernet. \n2- Vodka. \n3- Aperol. \n Presioná X para finalizar."
    );

    while (opciones != "X" && opciones != "x") {

        switch (opciones) {
            case "1":
                alert("Valor del producto seleccionado $ 1000");
                let numeroFernet = parseInt(prompt("Ingresa la cantidad"));
                calcularPedido(numeroFernet, 1000);
                break;

            case "2":
                alert("Valor del producto seleccionado $ 2000");
                let numeroVodka = parseInt(prompt("Ingresa la cantidad"));
                calcularPedido(numeroVodka, 2000)
                break;

            case "3":
                alert("Valor del producto seleccionado $ 1800");
                let numeroAperol = parseInt(prompt("Ingresa la cantidad"));
                calcularPedido(numeroAperol, 1800)
                break;

            default:
                alert("opcion no valida");
                break;

        }

        //condicion de salida del while
        let opcion = prompt(
            "Elegi la/s bebida/s que queres comprar: \n1- Fernet. \n2- Vodka. \n3- Aperol. \nPresioná X para finalizar"
        );
    }



}
else {
    alert("No es un usuario valido");
};