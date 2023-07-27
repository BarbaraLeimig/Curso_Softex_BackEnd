// função para iniciar a contagem regressiva
function countdown(segundos) {
    console.log("Iniciando a contagem regressiva... ");

    /* Criação do intervalo usando a função setInterval(), que é uma função do JavaScript que executa uma determinada 
    ação repetidamente em intervalos     definidos, neste caso a cada 1s (1000 milissegundos). Ele recebe uma função
    de callback como argumento, que será executada em cada intervalo */
    let intervalId = setInterval(() => {
        console.log(segundos);
        segundos--;

        /* A função clearInterval é usada para interromper o intervalo criado anteriormente. Isso impede que a contagem
        regressiva continue após a explosão. */
        if (segundos === 0) {
            clearInterval(intervalId);
            console.log("BUUUUM!!!")
        }
    }, 1000);
}

// Iniciar contagem regressiva com 10 segundos
countdown(10);
