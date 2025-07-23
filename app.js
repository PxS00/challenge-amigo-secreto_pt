//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById('amigo')
    
    if (amigo.value == '') {
        alert('Por favor, digite o nome de um amigo');
        return;
    }

    amigos.push(amigo.value)

    let lista = document.getElementById('listaAmigos')
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

    
}

function sortearAmigo(){
    if (amigos.length < 4) {
        alert('Você precisa adicionar pelo menos 4 amigos');
        return;
    }

    if (amigos.length > 10) {
        alert('Você só pode adicionar 10 amigos');
        return;
    }
    sortear(amigos)


}

function sortear(lista){
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        return lista[indiceAleatorio];
    }
}