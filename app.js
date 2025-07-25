//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo')
    const nome = amigoInput.value.trim();
    
    if (nome === '') {
        alert('Por favor, digite o nome de um amigo');
        return;
    }

    if (amigos.length > 10) {
        alert('Você só pode adicionar no máximo 10 amigos');
        return;
    }

    amigos.push(nome)
    atualizarLista() 
    amigoInput.value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos')
    lista.textContent = amigos.join(', ');
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Você precisa adicionar pelo menos 4 amigos');
        return;
    }

    const amigoSorteado = sortear(amigos)
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
}

function sortear(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}
