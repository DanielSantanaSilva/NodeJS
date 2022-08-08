// No JavaScript o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e captando o erro (catch) para tratá-lo. Alternativa correta! O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco catch é o responsável por capturar o que ocorreu e permitir à pessoa que está desenvolvendo tratar o erro

// Os blocos try e catch, que são as ferramentas do JavaScript para “captura” de exceções. Ou seja, qualquer erro ocorrido durante a execução do código no bloco try é tratado dentro do bloco catch.

//Ainda existe um último bloco, o finally, que é executado sempre, independentemente da execução do código ter sido resolvida no try ou gerado um erro passado para o catch. Tanto catch quanto finally são opcionais, mas o try deve sempre estar acompanhado de um ou outro.

//Ao contrário do catch, o finally não recebe nenhum dado através dos parênteses ( ). Vamos refatorar a função feita durante a aula para adicionar este bloco:

//1) Na função pegaArquivo() adicionamos um bloco finally após o catch():

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
  }
}

//Lembrando que todo o código dentro do bloco finally sempre será executado. Não fará diferença se o processamento tiver sido efetuado com sucesso (o código manteve-se dentro do bloco try) ou tiver gerado alguma exceção que foi lançada ao bloco catch(). No caso acima, podemos acrescentar uma mensagem avisando o usuário que o programa finalizou:

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("operação concluída"));
  }
}
