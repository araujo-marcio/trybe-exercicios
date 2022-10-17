/* 
Criar estruturas condicionais com operadores if/else e operadores l�gicos ser� algo muito comum na sua carreira de pessoa desenvolvedora. Ent�o vamos praticar essa habilidade t�o importante?
 */

/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio t�cnico, e atribua a ela um valor entre 1 e 100; */
const nota = 80;

/* Implemente uma l�gica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa est� na lista de espera. Para isso, considere as seguintes informa��es:
Se a nota for maior ou igual a 80, imprima �Parab�ns, voc� foi aprovada(o)!�
Se a nota for menor que 80 e maior ou igual a 60, imprima �Voc� est� na nossa lista de espera�
Se a nota for menor que 60, imprima �Voc� foi reprovada(o)�
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores l�gicos que se aplicam a cada situa��o. */
//Altere o valor da nota para verificar se as condi��es que voc� implementou funcionam.

let printStatus;

if (nota>=80) {
  printStatus = 'Parab�ns, voc� foi aprovada(o)!';
} else if (nota<80 && nota>=60) {
  printStatus = 'Voc� est� na nossa lista de espera'
} else if (nota<60) {
  printStatus = 'Voc� foi reprovada(o)';
}

console.log(printStatus);