// Obtenemos los elementos HTML y los guardamos en variables para poder manipularlos en JS

const fechaActual = document.getElementById('fechaActual');
const contenedorDolar = document.getElementById('contenedor-usd');
const dolarItem = document.getElementById('dolar');
const contenedorArs = document.getElementById('contenedor-ars')
const contenedorBlue = document.getElementById('contenedor-blue')
const btnSwitch = document.getElementById('switch');


let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

let fecha = new Date().toLocaleDateString("es-ES", options); 

// Obtenemos la fecha actual y la mandamos a imprimir a la etiqueta <p> del HTML 
fechaActual.innerHTML = fecha; 


// Obtenemos la info de la API 
fetch('https://api.coindesk.com/v1/bpi/currentprice.json') 
    .then(response => response.json())
    .then(data => displayData(data))



const displayData = (data) => {
    const USD = Math.round(data.bpi.USD.rate_float);
    contenedorDolar.textContent = `${USD} USD`
}

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(response => response.json())
    .then(valorArs => dataArg(valorArs))

    const dataArg = (valorArs) =>{
        let ARS = valorArs[0].casa.compra;
        contenedorArs.textContent = `${ARS} ARS` 
        let BLUE = valorArs[1].casa.compra;
        contenedorBlue.textContent = `${BLUE} ARS`
    }

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    })