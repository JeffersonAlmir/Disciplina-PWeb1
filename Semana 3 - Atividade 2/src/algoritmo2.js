/** variável letras está recebendo um array com 3 sub-array, onde os elementos desses
 * sub-array são caracteres.
 */
const letras = [
 ['a', 'b', 'c'],
 ['c', 'd', 'f'],
 ['d', 'f', 'g'],
];

/**flat() -> cria um novo array concatenando os elementos do sub-array que estão dentro do array letras.
 * reduce() ->
 */
 let resultado = letras.flat().reduce((objeto, numero) => {
   if (objeto[numero]) {
      objeto[numero] += 1;
      console.log(objeto[numero])
   } else {
     objeto[numero] = 1;
     console.log(objeto[numero])
  }
   return objeto;
  }, {});

console.log(resultado)