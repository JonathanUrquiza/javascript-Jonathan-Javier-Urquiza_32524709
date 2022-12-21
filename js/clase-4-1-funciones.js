let savedPIN = '5461';
function login() {
    let ingresar = false

    for (let i = 2; i >= 0; i--) {
        let userPIN = prompt("ingresa tu PIN. Te quedan " + (i + 1) + "oportunidades");

        if (userPIN === savedPIN) {
            alert("Ingreso exitoso")
            ingresar = true;
            break;
        } else {
            alert("Error te quedan " + i + " intentos")
        }
    }
    return ingresar;

}
//console.log(login());
let exito = login();

//estoy dentro del cajero
if (exito) {
    //accedemos a la info de la cuenta
    let saldo = 35000;

    let opcion = prompt('elejí una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar');

    while (opcion != "X" && opcion != "x") {
        
        switch (opcion) {
            case "1":
                alert("tu saldo es $ " + saldo);
                break;
            case "2":
               let Retiro = parseInt(prompt('Ingresa la cantidad a retirar'));

               if (Retiro <= saldo) {
                saldo = saldo - Retiro
                alert("Retiraste $ " + Retiro + " tu saldo nuevo es $ " + saldo);
                
               } else {
                alert("tu saldo es insuficiente");
               }
                break;
            case "3":
                let Deposito = parseInt(prompt('Ingresa la cantidad a depsotar'));
                saldo = saldo + Deposito;
                alert("tu nuevo saldo es $ "+ saldo)
               break;
            default:
                alert("opcion no válida")
                break;
        }



        //condción de salida del while.
        opcion = prompt('elejí una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar');

    }

} else {
    alert("retendremos tu tarjeta!")
}