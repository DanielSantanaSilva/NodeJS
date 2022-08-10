const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);

//cli é command line interface, interface de linha de comando, na verdade nada mais é do que o nosso terminal que é a interface onde inserimos, onde fazemos o input de comandos na linha de comando.
