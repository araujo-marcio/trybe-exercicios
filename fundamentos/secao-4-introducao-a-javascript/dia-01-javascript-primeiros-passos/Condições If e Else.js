/* 
Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão importante?
 */

/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; */
const nota = 80;

/* Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Você foi reprovada(o)”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. */
//Altere o valor da nota para verificar se as condições que você implementou funcionam.

let printStatus;

if (nota>=80) {
  printStatus = 'Parabéns, você foi aprovada(o)!';
} else if (nota<80 && nota>=60) {
  printStatus = 'Você está na nossa lista de espera'
} else if (nota<60) {
  printStatus = 'Você foi reprovada(o)';
}

console.log(printStatus);