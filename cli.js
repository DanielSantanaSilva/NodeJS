import pegaArquivo from "pegaArquivo";
//const pegaArquivo = require("./index");
const caminho = process.argv;

// Interface de linha de comando

//cli é command line interface, interface de linha de comando, na verdade nada mais é do que o nosso terminal que é a interface onde inserimos, onde fazemos o input de comandos na linha de comando.
//import pegaArquivo from "pegaArquivo";

console.log(pegaArquivo(caminho[2]));

//./texto1.md
