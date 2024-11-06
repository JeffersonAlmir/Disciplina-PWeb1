// Atribuição de um ArrayList com cinco elementos a variavel numbers.
const numbers = [1,2,3,4,5];

// Criação de uma Arow function chamada isOdd que recebe um elemento um numero como parametro.
const isOdd = (x) =>  {

  // retorno da função isOdd, o qual está retornando o resto do parametro dividido por dois.
  return x % 2 ; 
}

// Atribuição de um ArrayList a variável output.
//o método filter, esta recebendo a função isOdd e iterando os elementos do ArrayList numbers o qual está filtrando os elementos do ArrayList Numbers e retornando um novo ArrayList com os elementos que passaram na condição, ou seja, os elementos que o resto da divisão é diferente de zero.
const output = numbers.filter(isOdd);

// a função console.log() está recebendo um parametro, que é um ArrayList e imprimindo.
console.log(output);


//Em resumo, a variavel output irá receber um arrayList com os valores em que o resto da divisão é diferente de zero do Array que foi iterado



