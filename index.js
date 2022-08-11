const chalk = require("chalk");
const fs = require("fs");

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? "não há links" : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

module.exports = pegaArquivo;

//pegaArquivo("./texto1.md");
//module.exports = pegaArquivo;

/*
function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro));
}
*/

/*
function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  });
}
*/

// O Node

/*ele é um runtime, ele é, digamos assim, um ambiente com seus comandos especiais que permite que o JavaScript rode, seja executado fora do navegador, porque o navegador, por exemplo, o Chrome, o Firefox, etc., ele é o interpretador do JavaScript, ele é o interpretador nativo, ele é a casa onde o JavaScript mora, onde o JavaScript é executado. 

Então o Node ele virou sinônimo de JavaScript no back-end, mas ele é o conjunto de comandos, o runtime que executamos para poder rodar arquivos JavaScript aqui fora do navegador, no terminal, então com esse comando Node avisamos o nosso sistema operacional, para que ele entre no ambiente do node e aí sim rode o arquivo, então ele consegue acessar o arquivo JS, interpretar o que tem nele e voltar para nós o console.log.*/

//um projeto que não é front-end, um projeto de back-end com JavaScript, temos que criar algumas pequenas estruturas que estão sempre presentes nos projetos em Node.

//Uma delas é um arquivo de configuração que chama “package.json”, e criamos ele da seguinte forma, dando o comando npm init, ou seja, vamos iniciar, init, um novo projeto através do npm.

//Após dar o comando (npm init) no terminal foi criado o arquivo package.json.
// Observação o (-y) ao final do comando (npm init) ou seja (npm init -y) que significa que vamos dar yes, vamos dar sim, resposta automática para todas as perguntas que o npm init precisa para criar este arquivo “package.json” inicialmente.

//Anotação: Como o resultado da execução do process.argv é um array, podemos utilizar process.argv[2] e process.argv[3] respectivamente. Por se tratar de um array de string podemos capturar o retorno das posições 2 e 3 normalmente.

//Considerações finais:

//Aprendemos a utilizar a interface de linha de comando e como aplicamos a lib process do JavaScript para capturar e utilizar os dados informados no terminal em nosso código;

//A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;

//Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com module.exports e require();

//Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.

//Foi utilizado a lib node-fetch para acessar URLs e devolver informações como código de status HTTP; O método Promise.all para acessar de forma assíncrona um array de URLs e receber o resultado; E combinamos o uso do node-fetch e de promessas com async/await para garantir que o código seja executado de forma assíncrona, retornando os resultados.

//Que testes unitários são usados para testar partes pequenas do código em separado e que utilizamos os métodos da lib Jest para executá-los;

//Como fazer a leitura do resultados dos testes e qual é o significado de cada parte da sintaxe do Jest, como os métodos describe(), it() e toEqual();

//Como pensamos nos testes de forma a garantir que um erro no uso do programa realmente gere uma resposta e que é importante que isso ocorra para garantir que possíveis erros não passem despercebidos pelo usuário.
