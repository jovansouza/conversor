function converterMoeda() {
    var valor = parseFloat(document.getElementById("valor").value);
    var moedaOrigem = document.getElementById("moedaOrigem").value;
    var moedaDestino = document.getElementById("moedaDestino").value;

    // Fazer uma requisição para a API de conversão de moeda
    axios.get('https://api.exchangerate-api.com/v4/latest/' + moedaOrigem)
        .then(function (response) {
            // Obter as taxas de conversão da resposta da API
            var taxas = response.data.rates;

            // Calcular a taxa de conversão entre as moedas selecionadas
            var taxaConversao = taxas[moedaDestino];

            // Realizar a conversão
            var resultado = valor * taxaConversao;

            // Exibir o resultado
            document.getElementById("resultado").innerHTML = resultado.toFixed(2);
        })
        .catch(function (error) {
            console.log(error);
        });
}