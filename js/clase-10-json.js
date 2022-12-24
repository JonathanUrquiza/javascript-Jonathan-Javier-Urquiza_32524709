document.title = "Storage"

//metodo de seteo local

localStorage.setItem('bienvenido', 'HOLA CODER!');
localStorage.setItem('esValido',true);
//localStorage.setItem('Clave', VALOR);
localStorage.setItem('darckmode', true)

let saludo = localStorage.getItem('bienvenido')
console.log(saludo);

let darckmode = localStorage.getItem('darkmode')
console.log(darckmode);

//session

sessionStorage.setItem('susario',"dani")
//array
sessionStorage.setItem('selecionados', [1,2,3,4,5])

let selecionados = sessionStorage.getItem('selecionados').split(',')
console.log(selecionados);

//remueve los item
localStorage.removeItem('numbre')
//remueve todo
localStorage.clear()