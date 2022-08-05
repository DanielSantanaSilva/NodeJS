const chalk = require("chalk");

console.log(clalk.blue("Vamos Começar,", "Hello World"));

const paragrafo = "Texto retornado por uma função";

function texto(string) {
  return string;
}

console.log(texto(paragrafo));

// O Node

/*ele é um runtime, ele é, digamos assim, um ambiente com seus comandos especiais que permite que o JavaScript rode, seja executado fora do navegador, porque o navegador, por exemplo, o Chrome, o Firefox, etc., ele é o interpretador do JavaScript, ele é o interpretador nativo, ele é a casa onde o JavaScript mora, onde o JavaScript é executado. 

Então o Node ele virou sinônimo de JavaScript no back-end, mas ele é o conjunto de comandos, o runtime que executamos para poder rodar arquivos JavaScript aqui fora do navegador, no terminal, então com esse comando Node avisamos o nosso sistema operacional, para que ele entre no ambiente do node e aí sim rode o arquivo, então ele consegue acessar o arquivo JS, interpretar o que tem nele e voltar para nós o console.log.*/

//um projeto que não é front-end, um projeto de back-end com JavaScript, temos que criar algumas pequenas estruturas que estão sempre presentes nos projetos em Node.

//Uma delas é um arquivo de configuração que chama “package.json”, e criamos ele da seguinte forma, dando o comando npm init, ou seja, vamos iniciar, init, um novo projeto através do npm.

// Após dar o comando (npm init) no terminal foi criado o arquivo package.json.
// Observação o (-y) ao final do comando (npm init) ou seja (npm init -y) que significa que vamos dar yes, vamos dar sim, resposta automática para todas as perguntas que o npm init precisa para criar este arquivo “package.json” inicialmente.
