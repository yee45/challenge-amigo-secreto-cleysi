// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo(nombreAmigoIngresado) {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(nombreAmigo);
        limpiarEntradaDeTexto('#amigo');
    }
    recorrerArreglo();
    return;
}

function recorrerArreglo() {
    let lista = document.querySelector('ul')
    //limpiar la la lista 
    lista.innerHTML = "";
    //Recorrer el array e insertar los nombres en la lista
    for (let amigo of amigos) {
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML = amigo;
        lista.appendChild(elementoLista); 
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    //Validar si hay amigos en el array
    if (amigos.length === 0){
        resultado.innerHTML = "No hay amigos en la lista.";
    } else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        resultado.innerHTML = `Amigo secreto: ${amigos[indiceAleatorio]}`;
    }
    return;
}
function limpiarEntradaDeTexto(elemento){
    document.querySelector(elemento).value = '';
    return;
}