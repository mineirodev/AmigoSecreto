let listaAmigos = [];

function adicionar() {
    //Recuperar valores
    let nomeAmigo =  document.getElementById('nome-amigo').value
    listaAmigos.push(nomeAmigo);
    document.getElementById('nome-amigo').value = ''; 
    
    //Atribuir a lista de amigos incluidos
    let listaAmigosIncluidos = document.getElementById('lista-amigos');
    listaAmigosIncluidos.innerHTML = listaAmigos;
    
}

function sortear() {

}

function reiniciar() {

}