//Caminho absoluto vs relativo

// É essencial conhecer a estrutura de pastas e arquivos e saber como “navegar” por esta estrutura. Muitas vezes descobrimos que aquele bug estranho aconteceu porque cometemos algum erro no caminho ou (path) de algum arquivo, apesar de editores de texto como o Visual Studio Code ajudarem com o recurso de autocompletar.

//Caminho absoluto

/*Chamamos de caminho absoluto quando a localização de um arquivo ou pasta é especificado a partir do diretório-raiz do sistema operacional. Por exemplo:

#caminho para um diretório (a última / é opcional)
/home/juliana/Documents/alura/projeto-js

#caminho para um arquivo dentro do diretório
/home/juliana/Documents/alura/projeto-js/index.js
*/

//Caminho relativo

/*Um caminho relativo para um diretório ou arquivo é definido a partir de sua relação com o pwd, ou seja, o present working directory (diretório de trabalho atual). Na linha de comando, pwd também é o comando print working directory (imprimir o diretório de trabalho), que usamos justamente para saber onde na estrutura de diretórios do sistema operacional se encontra o diretório em que estamos.

Veja no exemplo abaixo uma representação em árvore de um diretório como o do curso em que estamos trabalhando (o diretório node_modules foi excluído para facilitar a leitura, pois é muito extenso):

/home/juliana/Desktop/curso-js
.
├── curso-js
│   ├── arquivos
│   │   └── texto1.md
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── cli.js
│       ├── http-validate.js
│       └── index.js

Na representação acima, consideramos como pwd o diretório curso-js. Então, o caminho relativo do arquivo texto1.md, por exemplo, seria ./arquivos/texto1.md, e o caminho absoluto seria /home/juliana/Desktop/curso-js/arquivos/texto1.md.

Na estrutura de diretórios, o . representa “aqui”. Quando queremos sair do diretório atual e “voltar” um nível, utilizamos ... Por exemplo:

/home/juliana/Desktop/curso-js
.
├── curso-js
│   ├── arquivos
│   │   └── texto1.md
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   ├── cli.js
│   │   ├── http-validate.js
│   │   └── index.js
│   └── test
│       └── index.test.js

Se quisermos referenciar um módulo no arquivo ./src/index.js a partir do arquivo ./test/index.test.js, a importação seria feita da seguinte forma:

const moduloImportado = require(‘../src/index.js’)
// arquivo ./test/index.test.js

Usamos o .. para “subir um nível” na hierarquia de diretórios para depois “entrar” no diretório que queremos. Dessa forma, não precisamos referenciar o caminho absoluto de todos os arquivos quando fizermos importações de módulos; o que também funcionaria, mas não é tão prático.
*/

//Outra diferença importante entre caminho absoluto e relativo é com relação à execução de programas a partir da linha de comando. Por exemplo, usando a árvore de diretórios acima, o comando node index.js só funcionaria caso o diretório atual (pwd) no terminal já fosse /home/juliana/Desktop/curso-js/src. Por outro lado, o comando node /home/juliana/Desktop/curso-js/src/index.js funcionaria independentemente do diretório atual no terminal, pois o NodeJS vai acessar o arquivo index.js a partir de seu caminho absoluto.

//O terminal é uma ferramenta poderosa. Além de executar comandos e rodar programas, com ele podemos fazer tudo que fazemos com as janelas e ícones do sistema operacional como navegar entre diretórios (ou pastas), criar arquivos, mudá-los de lugar e renomeá-los, dentre outras tarefas.
