//  Introdução a testes, vimos alguns dos “caminhos felizes” possíveis - quando testamos se está tudo dando certo quando o programa se comporta como deveria.

//Porém devemos pensar em todos os cenários possíveis quando um programa executa, inclusive o que acontece quando as coisas não dão certo, e existem métodos de teste para essas situações.

//Vamos ver um exemplo de testes que verificam os possíveis erros que deveriam ser capturados pelo código; ou seja, se os erros estão sendo “lançados” como deveriam.

//O Jest tem métodos próprios para isso. Um deles é o rejects.toThrow(), que verifica de forma assíncrona se uma promessa é rejeitada e resulta em um lançamento de erro:

it("deve lançar um erro na falta de arquivo", async () => {
  await expect(
    pegaArquivo("/home/juliana/Documents/alura/lib-markdown/test/arquivos")
  ).rejects.toThrow(/não há arquivo no caminho/);
});

//E também podemos testar o caso de sucesso, quando a promessa é resolvida. Nesse caso, o Jest testa se a promessa resulta no estado “fulfilled” e também o resultado retornado por ela:

it("deve resolver a função com sucesso", async () => {
  await expect(
    pegaArquivo(
      "/home/juliana/Documents/alura/lib-markdown/test/arquivos/texto1.md"
    )
  ).resolves.toEqual(arrayResult);
});

//É possível testar também outros retornos para a promessa resolvida, como resolves.toBe() ou resolves.not.toBe().

//Dicas: Para iniciar a utilização de jest é necessária a configuração do arquivo package.json e informar que vamos usar a seção script ,como em "test": "jest".

//O matchers toBe é utilizado para comparar valores primitivos. Para objetos, o recomendado é utilizar o toEqual.
