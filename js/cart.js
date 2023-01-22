document.title = "Cart";
let tablaPeriodica = [
  //Elemento base
  {
    nombre: "Hidrógeno",
    simbolo: "H",
    id: 1,
    numeroM: 1.008,
    estadoDeOxidacion: 1,
    estructuraElectronica: "1s1",
    electroNegatividad: 2.2,
    grupo: "calcógeno",
    img: "hidrogeno.jpg"
  },
  {
    nombre: "Helio",
    simbolo: "He",
    id: 2,
    numeroM: 4.003,
    estadoDeOxidacion: 0,
    estructuraElectronica: "1s2",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "helio.jpg"
  },
  {
    nombre: "Litio",
    simbolo: "Li",
    id: 3,
    numeroM: 6.968,
    estadoDeOxidacion: 1,
    estructuraElectronica: "1s2 2s1",
    electroNegatividad: 0.93,
    grupo: "metal alcalino",
    img: "litio.png"
  },
  {
    nombre: "Berilio",
    simbolo: "Be",
    id: 4,
    numeroM: 9.012,
    estadoDeOxidacion: 2,
    estructuraElectronica: "1s2 2s2",
    electroNegatividad: 1.57,
    grupo: "alcalinoterreo",
    img: "berilio.jpg"
  },
  {
    nombre: "Boro",
    simbolo: "B",
    id: 5,
    numeroM: 10.81,
    estadoDeOxidacion: 3,
    estructuraElectronica: "1s2 2s2 2p3",
    electroNegatividad: 2.04,
    grupo: "calcógeno",
    img: "boro.jpg"
  },
  {
    nombre: "Carbono",
    simbolo: "C",
    id: 6,
    numeroM: 12.01,
    estadoDeOxidacion: "",
    estructuraElectronica: "1s2 2s2 2p2",
    electroNegatividad: 2.55,
    grupo: "calcógeno",
    img: "carbono.jpg"
  },
  {
    nombre: "Nitrógeno",
    simbolo: "N",
    id: 7,
    numeroM: 14.01,
    estadoDeOxidacion: "",
    estructuraElectronica: "",
    electroNegatividad: 3.04,
    grupo: "calcógeno",
    img: "nitrogeno.jpg"
  },
  {
    nombre: "Oxígeno",
    simbolo: "O",
    id: 8,
    numeroM: 16.0,
    estadoDeOxidacion: -2,
    estructuraElectronica: "",
    electroNegatividad: 3.44,
    grupo: "calcógeno",
    img: "oxigeno.jpg"
  },
  {
    nombre: "Flúor",
    simbolo: "F",
    id: 9,
    numeroM: 19.0,
    estadoDeOxidacion: -1,
    estructuraElectronica: "",
    electroNegatividad: 3.98,
    grupo: "alógenos",
    img: "fluor.jpg"
  },
  {
    nombre: "Neón",
    simbolo: "Ne",
    id: 10,
    numeroM: 20.18,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "neon.jpg"
  },
  {
    nombre: "Sodio",
    simbolo: "Na",
    id: 11,
    numeroM: 22.99,
    estadoDeOxidacion: 1,
    estructuraElectronica: "",
    electroNegatividad: 0.93,
    grupo: "metal alcalino",
    img: "sodio.jpg"
  },
  {
    nombre: "Magnesio",
    simbolo: "Mg",
    id: 12,
    numeroM: 24.31,
    estadoDeOxidacion: 2,
    estructuraElectronica: "",
    electroNegatividad: 1.33,
    grupo: "metal alcalinoterreo",
    img: "magnesio.jpg"
  },
  {
    nombre: "Aluminio",
    simbolo: "Al",
    id: 13,
    numeroM: 26.98,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "aluminio.jpg"
  },
  {
    nombre: "Silicio",
    simbolo: "Si",
    id: 14,
    numeroM: 28.09,
    estadoDeOxidacion: 4,
    estructuraElectronica: "",
    electroNegatividad: 1.61,
    grupo: "Metaloide",
    img: "silicio.jpg"
  },
  {
    nombre: "Fósforo",
    simbolo: "P",
    id: 15,
    numeroM: 30.97,
    estadoDeOxidacion: "+- 3 5",
    estructuraElectronica: "",
    electroNegatividad: 2.19,
    grupo: "calcógeno",
    img: "fosforo.jpg"
  },
  {
    nombre: "Azufre",
    simbolo: "S",
    id: 16,
    numeroM: 32.07,
    estadoDeOxidacion: "+- 2 4 6",
    estructuraElectronica: "",
    electroNegatividad: 2.58,
    grupo: "calcógeno",
    img: "azufre.jpg"
  },
  {
    nombre: "Cloro",
    simbolo: "Cl",
    id: 17,
    numeroM: 35.45,
    estadoDeOxidacion: "+- 1 3 5 7",
    estructuraElectronica: "",
    electroNegatividad: 3.16,
    grupo: "halógeno",
    img: "cloro.jpg"
  },
  {
    nombre: "Argón",
    simbolo: "Ar",
    id: 18,
    numeroM: 39.95,
    estadoDeOxidacion: 0,
    estructuraElectronica: "",
    electroNegatividad: 0,
    grupo: "gas noble",
    img: "argon.jpg"
  },
];
const tablaSecundaria = [];
let seleccionados = [];
let listaCart = document.querySelector("#listaCart"),
  btncomprar = document.getElementById('btncomprar');
btnBuy = document.getElementById('btnBuy'),
  btnCalculo = document.getElementById('btnCalculo')


const carrito = JSON.parse(localStorage.getItem("separado"))
console.log(carrito);

/* const [a, b, c, d] = carrito;
console.log(a);
console.log(carrito[0]);
console.log(b);
console.log(c);
console.log(d);
console.log(...carrito);
//console.log(Math.max(...carrito));



 */


//Crear elemento


for (const item of carrito) {
  
  const {nombre, id, simbolo, img, electroNegatividad} = item;


  let html;

  html =
    `<div class="">
    <div class = "card">
    <h1>${nombre}</h1>
    <div class ="card-title">
    <p>${id}</p> 
    </div>
            <div class="card-content">
            <span class ="card-title">${simbolo.toUpperCase()}</span>
            <div>
            <img src="../img/${img}" class="card-imge"/>
            </div>
            </div>
            <div class="card-data">
            <p>electronegatividad</p>
            <p>${electroNegatividad}</p>
            </div>
            <div>
            <form>
            <button class="btnBorrar" id="${simbolo}">Borrar</button>
            </form>
            </div>
            </div>
            </div>`;
  listaCart.innerHTML += html

  const arrayBotones = document.querySelectorAll(".btnBorrar");
  console.log(arrayBotones);
  //recorremos el NodeList de botones y le agregamos un evento
  arrayBotones.forEach((btnBorrar) => {
    btnBorrar.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("funciona");
      //Decimos que la variable local va a ser igual al array filtrado
      local = local.filter((el) => el.simbolo != btn.id);//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
      //guardar en el local y pintar html
      //guardarLS(local);
      //crearHtml(local);
    });
  });
}