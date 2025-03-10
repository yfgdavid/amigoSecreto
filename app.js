let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado;
        do {
            amigoSorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSorteado === amigos[i]);

        resultado.push(`${amigos[i]} --> ${amigoSorteado}`);
        sorteio.splice(sorteio.indexOf(amigoSorteado), 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}
