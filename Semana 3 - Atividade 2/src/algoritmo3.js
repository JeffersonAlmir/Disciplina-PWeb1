//a variavel estudates está recebendo array de objetos.
const estudantes = [
  { nome: 'Alice', notas: [100, 60, 92] },
  { nome: 'João', notas: [75, 30, 85] },
  { nome: 'Charles', notas: [90, 95, 85] },
  { nome: 'Paulo', notas: [100, 100, 100] },
 ];
 
 /** A variável estudantesMedias recebe um array de objetos com a media de aluno/objeto
  * calculada.
  *o metodo map() está percorrendo o array destudante e retornando um novo array de objetos onde 
  * a medias estão calculadas
  */
 const estudantesMedias = estudantes.map((estudante) => {
/** variavel total está recebendo a soma de todos os elementos do array passado dentro
 * de cada objetos em que a chave é nota
 * reduce( ) -> esta somando todos os elementos do arraynota que esto dentro do objeto
 */
  const total = estudante.notas.reduce((soma, nota) => soma + nota);
  let {nome} = estudante;
  
  
  return { nome, media: total / estudante.notas.length };
 });
  
 //melhoresMedias esta recebendo um array com as medias dos estudantes q passara de 90 pontos
 const melhoresMedias = estudantesMedias.filter(
  (student) => student.media > 90,
 );
 