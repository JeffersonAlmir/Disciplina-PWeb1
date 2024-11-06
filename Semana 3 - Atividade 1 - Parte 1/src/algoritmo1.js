// Atribuição de um ArrayList com cinco elementos a variavel número
const numeros = [1,2,3,4,5];
// Criação de uma Arow function chamada calcular número que recebe
// como parametro um numero.
let calcularDobro=(numero)=>
{
  //retorno da função, o qual retorna o elemento do Array nummero multiplicado por dois.
  return numero*2;  
}
// variável numerosDobro vai receber um a ArrayList 
//metodo .map() está recebendov como parametro a função calcularDobro, isso é chamado callback,  e iterando os elementos do ArrayList retornando um novo ArrayList
const numerosDobro = numeros.map(calcularDobro);
// a função console.log() está recebendo um parametro, que é um ArrayList e imprimindo. 
console.log(numerosDobro);

// Em resumo, a variavel numerosDobro irá receber um arrayList com os valores  dobrado do Array inicial.
