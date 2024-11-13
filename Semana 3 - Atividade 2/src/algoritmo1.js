/**variavel tamanho recebe a entrada do prompt do tipo texto que será convertido em 
 * inteiro pelo método parseInt()
 */
const tamanho = parseInt(prompt('Digite o tamanho da lista de números'));


/** variavel lista recebe um array com os elementos com valor null.
 * new Array -> cria um array  com o tamanho que o usúario irá passar no prompt().
 * fill()-> preenche o Array com valor o null,.
 */
const lista = new Array(tamanho).fill(null);

/** variável resultado recebe  a multiplicação de todos os elementos de um lista.
 * map() -> vai percorrer o array e retornar um novo array adicionando nesse array 
 * o valor do indice mais 1.
 *  reduce() -> vai percorrer o array e multiplicar os parametros passado no callback
 * e irá retorna esse valor.
 */
const resultado =lista
 .map(function (item, index) {
   return index + 1;
 })
 .reduce(function (acumulador, item) {
   return acumulador * item;
 });


/** variável resultado2 recebe  a soma de todos os elementos de um array.
 * map() -> vai percorrer o array e retornar um novo array adicionando nesse array 
 * o valor do indice mais 1.
 *  reduce() -> vai percorrer o array e somar os parametros passado no callback
 * e irá retorna esse valor.
 */
let resultado2 =new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);


