//metodos

//URL: direccione web

//get: solicitar

//post: enviar

//put: editar

//delete: borrar

/*el metodo post y put llevan un cuerpo en la petición, y el metodo get y delete no requieren enviar nada, porque get pide un recurso y el metodo delete solo encecita un id para borrarlo */

/*body
es el espacio en la peticion donde se definen los tados a enviar.
*/

//{"name": "Jhon", "age": 35}

//FETCH ES PARA PEDIR RECURSOS!!!!!
//trabaja internamente trabaja con promesas
//metodos then, catch

//Estructura  fetch(URL,Options)

const lista = document.querySelector("#listado");

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(post => {
            const li = document.createElement('li');
            li.className = 'card';
            li.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
            //lista.appendChild(li)
        });
    })

//post no lo podemos realizar sin un backend


fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: "POST",
    body: JSON.stringify({
        id: 101,
        title: "POST DE PRUEBA",
        body: "SOY UN POST DE PRUEBA; SE NECESITA UN BACKEND",
    }),
    headers: {
        "content-type": "application/json"
    }
}).then(res => res.json())
    .then(data2 => {
        console.log(data2);
    })

/* fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: "POST",
    body: JSON.stringify({
        id: 101,
        title: "POST DE PRUEBA",
        body: "HOLA SOY UN POST DE PRUEBA, ESTA ACCIÓN NO SE PUEDE REALIZAR SIN UN BACKEND",
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json())
    .then(data => {
        console.log(data);
    }) */

////////////////////////////////////////////////////

