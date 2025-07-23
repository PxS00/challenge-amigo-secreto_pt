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