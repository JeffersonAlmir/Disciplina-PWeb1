
// Atribuição de um ArrayList com cinco elementos a variavel numbers.
const numbers = [1,2,3,4,5];
// Atribuição de um ArrayList a variavel output.
// A função .map() está iterando os elementos do array numbers e retornando um novo ArrayList
const output = numbers.map((x)=>{
  //retorno da função map(), o qual retorna o elemento do Array numbers multiplicado por dois.
  return x * 2;  
});
// a função console.log() está recebendo um parametro, que é um ArrayList e imprimindo.
console.log(output);

// Em resumo, a variavel output irá receber um arrayList com os valores dobrado do Array que foi iterado.
