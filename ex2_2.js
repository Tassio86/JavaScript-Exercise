function converterDuracao() {
    
    // Cria referência aos elementos da página:
    
    let inTitulo = document.getElementById("inTitulo");
    let inDuracao = document.getElementById("inDuracao");
    let outTitulo = document.getElementById("outTitulo");
    let outResposta = document.getElementById("outResposta");

    // Obtém conteúdos dos campos de entrada:

    let titulo = inTitulo.value;
    let duracao = inDuracao.value;

    // Arredonda para baixo o resultado da divisão:

    let horas = Math.floor(duracao / 60);

    // Obtém o resto da divisão entre os números:

    let minutos = duracao % 60;

    // Altera o conteúdo dos parágrafos de resposta:

    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "hora(s) e " + minutos + " minuto(s)";
}

// Cria uma referência ao elemento btConverter (botão):

let btConverter = document.getElementById("btConverter");

// Registra um evento associado botão, para carregar uma função:

btConverter.addEventListener("click", converterDuracao);

