let listaAmigos = [];
let listaAmigosEmbaralhada;

function adicionar() {
    let nomeAmigo =  document.getElementById('nome-amigo').value
    if (nomeAmigo.trim() === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    //Recuperar valores
    
    listaAmigos.push(nomeAmigo);
    document.getElementById('nome-amigo').value = ''; 
    
    //Atribuir a lista de amigos incluidos
    let listaAmigosIncluidos = document.getElementById('lista-amigos');
    listaAmigosIncluidos.innerHTML = listaAmigos;
    atualizarListaAmigos() ; 
}

function sortear() {
    
    if (listaAmigos.length < 4) {
        alert("É necessário adicionar pelo menos quatro amigos para o sorteio.");
        return;
    }
    //Embaralhar array
    listaAmigosEmbaralhada = embaralhaArray(listaAmigos);
    //Percorre o array e atribui os cada nome em uma posicao
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++){
        if(i == listaAmigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i+1] + '<br>';
        }
        
    }
    
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralhaArray(array) { //função para embaralhar um array
    for (let i = array.length -1; i > 0 ; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }    
    return array;
}

function atualizarListaAmigos() {
    let listaAmigosIncluidos = document.getElementById('lista-amigos');
    listaAmigosIncluidos.innerHTML = ''; // Limpa a lista antes de adicionar os nomes

    for (let i = 0; i < listaAmigos.length; i++) {
        let nomeAmigo = listaAmigos[i];
        let itemLista = document.createElement('li'); // Cria um elemento de lista (li)
        itemLista.textContent = nomeAmigo;
        itemLista.addEventListener('click', function() {
            removerAmigo(nomeAmigo);
        });
        listaAmigosIncluidos.appendChild(itemLista); // Adiciona o elemento à lista
    }
}

function removerAmigo(nome) {
    listaAmigos = listaAmigos.filter(amigo => amigo !== nome); // Filtra a lista removendo o nome clicado
    atualizarListaAmigos(); // Atualiza a exibição da lista
}