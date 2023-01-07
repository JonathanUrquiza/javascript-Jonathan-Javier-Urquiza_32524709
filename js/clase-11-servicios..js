const search = document.querySelector("#searchBox"),
    btnBuscar = document.querySelector("#search"),
    contenedor = document.querySelector(".servicios"),
    nombreUser = document.querySelector("#nombreUser");

const servicios = [
    { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
    { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
    { id: 3, nombre: "electrodos", precio: 2800, img: "electroos.jpg" },
    { id: 4, nombre: "manicura", precio: 1500, img: "manicura.jpg" },
    { id: 5, nombre: "uñas", precio: 1200, img: "uñas.jpg" },
    { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpg" },
    { id: 7, nombre: "microblasnding", precio: 5800, img: "microblasnding.jpg" },
    { id: 8, nombre: "radiofrecuencia", precio: 12800, img: "radiofrecuencia.jpg" },
    { id: 9, nombre: "micropigmentación", precio: 7800, img: "micropigmentación.jpg" },
    { id: 9, nombre: "micropigmentación", precio: 7800, img: "micropigmentación.jpg" },
    
];
//funcion filtro
function filtradoServicios(filtro) {
    let filtrado = servicios.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

//crear HTML

function crearHtml(array) {
    let html;
    //construir html
    for (const servicio of array) {
        html =
            `<div class="">
                <div class = "card">
                    <div class ="card-imge">
                        <img src="#${servicio.img}"/>
                        <span class ="card-title">${servicio.nombre.toUpperCase()}</span>
                    </div>
                 </div>
                <div class="card-content">
                  <p>${servicio.precio}</p>
                </div>
                <div class="card-action">
                    <button class="btn" id="${servicio.id}">compra</button>
                </div>
            </div>`;
        contenedor.innerHTML += html
    }
}
//llamara a la funcio crarHtml
crearHtml(servicios);
 //listener búsqueda
btnBuscar.onclick= (e)=>{
    e.preventDefault()
    contenedor.innerHTML="";
    let filtro = filtradoServicios(search.value)
    console.log(filtro);
    crearHtml(filtro)
}
