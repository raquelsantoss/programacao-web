// Declaração das variáveis numéricas
const numA1 = 10;
const numB1 = 5;
const numA2 = 8;
const numB2 = 3;

// Realização das operações
const somaResult = numA1 + numB1;
const subtracaoResult = numA1 - numB1;
const multiplicacaoResult = numA2 * numB2;
const divisaoResult = numA2 / numB2;

// Função para imprimir os resultados formatados
function imprimirResultado(operacao, numA, numB, resultado) {
  console.log(`Resultado da ${operacao} entre ${numA} e ${numB}: ${resultado}`);
}

// Imprimir os resultados
imprimirResultado("soma", numA1, numB1, somaResult);
imprimirResultado("subtração", numA1, numB1, subtracaoResult);
imprimirResultado("multiplicação", numA2, numB2, multiplicacaoResult);
imprimirResultado("divisão", numA2, numB2, divisaoResult.toFixed(2));
