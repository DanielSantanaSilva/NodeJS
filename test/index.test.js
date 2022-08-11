const pegaArquivo = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const resultado = await pegaArquivo(
      "/Users/PC GAMER/Desktop/Lina Open X/Estudos/Alura/JavaScript para back-end/NodeJS/test/arquivos/texto1.md"
    );
    expect(resultado).toEqual(arrayResult);
  });
  it("deve retornar mensagem 'não há links'", async () => {
    const resultado = await pegaArquivo(
      "/Users/PC GAMER/Desktop/Lina Open X/Estudos/Alura/JavaScript para back-end/NodeJS/test/arquivos/texto1_semlinks.md"
    );
    expect(resultado).toEqual("não há links");
  });
});
