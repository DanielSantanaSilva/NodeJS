//Promises com .then() e como utilizar!

//Já que estávamos falando sobre APIs REST, vamos ver um exemplo usando a Fetch API do JavaScript para buscar dados e convertê-los para o formato JSON. Esta API (que funciona nativamente nos navegadores atuais) tem alguns métodos internos e já retorna por padrão uma Promise que vai resolver a requisição, tendo ou não sucesso.

function getUser(userId) {
  const userData = fetch(`https://api.com/api/user/${userId}`)
    .then((response) => response.json())
    .then((data) => console.log(data.name));
}

getUser(1); // "Nome Sobrenome

//Destrinchando o código acima: a função getUser() recebe um id de usuário como parâmetro, para que seja passado para o endpoint REST fictício. O método fetch() recebe como parâmetro o endpoint e retorna uma Promise.

/* Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.

Assim, podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise sem pausar o fluxo do programa.

O resultado pode ou não estar pronto ainda, e não há forma de pegar o valor de uma Promise de modo síncrono; Só é possível requisitar à Promise que execute uma função callback quando o resultado estiver disponível - seja ele o que foi solicitado (os dados da API, por exemplo), ou uma mensagem de erro caso algo tenha dado errado com a requisição (o servidor pode estar fora do ar, por exemplo).

No exemplo acima:ao iniciarmos uma cadeia de promessas, por exemplo para fazer uma requisição HTTP, enquanto a resposta está pendente, ela retorna um Promise object. O objeto, por sua vez, define uma instância do método .then(). Ao invés de passar o retorno da função callback diretamente para a função inicial, ela é passada para .then(). Quando o resultado da requisição HTTP chega, o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método .then().

A cadeia de funções fetch().then().then() não significa que há múltiplas funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que cada instância de .then() retorna, por sua vez, um new Promise(). Toda a cadeia é lida de forma síncrona na primeira execução, e em seguida executada de forma assíncrona. */

//Capturando erros com Promises

//O manejo de erros é importante em operações assíncronas. Quando o código é síncrono, ele pode lançar pelo menos uma exceção mesmo sem nenhum tipo de tratamento de erros. Porém, no assíncrono, exceções não tratadas muitas vezes passam sem aviso e fica muito mais difícil de debugar.

//Não há como utilizar o try/catch quando usamos o .then(), pois a computação só será efetuada após o retorno do objeto-Promise. Então devemos passar funções que executem as alternativas, para o caso de sucesso ou falha da operação. Por exemplo:

function getUser(userId) {
  const userData = fetch(`https://api.com/api/user/${userId}`)
    .then((response) => response.json())
    .then((data) => console.log(data.name))
    .catch((error) => console.log(error))
    .finally(() => {
      "aviso de fim de carregamento";
    });
}

getUser(1); // "Nome Sobrenome"

//Além do método .then() que recebe o objeto-Promise para ser resolvido, o método .catch() retorna no caso de rejeição da Promise. Além disso, o último método, .finally(), é chamado independente de sucesso ou falha da promessa e a função callback deste método é sempre executada por último e pode ser usada, por exemplo, para fechar uma conexão ou dar algum aviso de fim de carregamento.

//Resolvendo várias promessas

//No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar Promise.all:

const endpoints = [
  "https://api.com/api/user/1",
  "https://api.com/api/user/2",
  "https://api.com/api/user/3",
  "https://api.com/api/user/4",
];

const promises = endpoints.map((url) => fetch(url).then((res) => res.json()));

Promise.all(promises).then((body) => console.log(body.name));

// Lembrete: Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled). Os estados possíveis, uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected). Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não muda mais de estado.

//Mais anotações sobre promises

//Enquanto .then() e async/await são utilizados quando temos que lidar com promessas já existentes - por exemplo, ao executarmos o método fetch() que, por definição, sempre retorna uma promessa, usamos o construtor Promise() para escrever do zero nossas próprias promessas.

//exemplo de função que recebe um valor booleano (true ou false) e com base nesse valor retorna uma new Promise() rejeitada ou completa.

function promessa(bool) {
  const x = bool;
  return new Promise((resolve, reject) => {
    if (!x) {
      reject(new Error("falha na promessa"));
    }
    resolve("sucesso na promessa");
  });
}

function exibeResposta(textoResult) {
  console.log(textoResult);
}

promessa(true).then((texto) => exibeResposta(texto));
// sucesso na promessa

//Veja que a função promessa() cria uma nova promessa a partir do construtor new Promise() e com dois parâmetros: resolve e reject. O objeto Promise() precisa trabalhar sempre com estes dois parâmetros, que devem ser invocados após a resolução (seja com ou sem sucesso).

//Neste caso, passamos um texto como parâmetro de cada um deles. Quando executamos a função promise(true) este valor é carregado através das promessas até ser passado para a função exibeResposta(texto), que por fim vai exibir a mensagem correta. No caso de promessa(false), além da mensagem “falha na promessa” o NodeJS também vai lançar no terminal a stacktrace do objeto Error.

/*
Concluindo, sempre temos que ter em mente os estados possíveis de qualquer promessa em JavaScript:

Promessas podem ser concluídas de duas formas: fulfilled (realizada, completa) ou rejected (rejeitada), o que equivale a duas situações possíveis, ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.
Promessas que não estão fulfilled nem rejected estão pending (pendentes). Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.
Após a finalização do processamento, a promessa passa para o estado de settled (concluída), independente do resultado.
Uma vez que a promessa está settled seu resultado não se altera mais. Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.
*/
