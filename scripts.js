// toda vez que temos vários comandos que precisamos ficar usando no terminal para rodar as partes do nosso projeto, é escrever um script que faça isso para nós

//No arquivo “package.json” no projeto, ele já vem com uma propriedade scripts e dentro dela ele já tem como padrão, como default, ele já deixa um script chamado teste, com uma informação aqui que não tem teste especificado.

//Foi adicionado depois de teste, um que eu vou chamar de “cli”: ””, e agora o que passamos como valor dessa propriedade cli, vamos passar exatamente o comando que queremos que seja rodado no terminal, e qual que é o comando que temos usado? ”node cli.js e também podemos passar o caminho do arquivo já que estamos usando sempre o mesmo, então ./arquivos/texto1.md”.

//Então quando criamos um script e coloca aqui na lista do “package.json”, toda vez que chamarmos a palavra-chave, cli aqui, o node vai executar o que estiver especificado aqui na parte de scripts, então ele vai rodar exatamente o comando que pedirmos.

//Lá no nosso terminal então nós vamos, ao invés de executar, node cli caminho do arquivo, nós vamos executar npm run cli e fez a mesma coisa, trouxe para nós a nossa lista de links, só que agora o que está sendo executado, é esse comando, ele passa o comando que está sendo executado, só que está sendo executado a partir de um script, que especificamos no “package.json”, que é um arquivo de configuração e ele é meio que o livro do nosso projeto e uma das coisas que ele tem são todos os scripts, ou seja, todas as automatizações de processos que podemos colocar no nosso projeto, no nosso código para ficar tudo mais ágil.
