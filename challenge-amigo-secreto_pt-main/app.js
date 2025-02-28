let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let novoAmigo = amigo.value;
        
    if (novoAmigo) {
        listaDeAmigos.push(novoAmigo);
        amigo.value = "";
        atualizarLista()
    } else {
        alert("Digite um nome válido!")
    }
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    listaDeAmigos.forEach(amigo => {
        let amigoAdicionado = document.createElement("li");
        amigoAdicionado.textContent = amigo;
        listaAmigos.appendChild(amigoAdicionado);
    })
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert ("A lista está vazia! Digite o nome de seus amigos");
        return;
    }

    let sorteio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[sorteio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}`;
}

function reiniciarJogo() {
    listaDeAmigos = [];
    resultado.innerHTML = "";
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild)
    }
}