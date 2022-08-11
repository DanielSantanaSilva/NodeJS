//Como usar o async/await!

/*As palavras-chave async e await, implementadas a partir do ES2017, são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.

Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.

A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled), o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção. */

//Um exemplo:
let response = await fetch(`https://api.com/api/user/${userId}`);
let userData = await response.json();

//Só é possível usar await em funções declaradas com a palavra-chave async, então vamos adicioná-la:

async function getUser(userId) {
  let response = await fetch(`https://api.com/api/user/${userId}`);
  let userData = await response.json();
  return userData.name; // não é necessário o await no return
}

//  Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise. Se a Promise se resolver normalmente, o objeto-Promise retornará o valor. Caso lance uma exceção, podemos usar o try/catch como estamos acostumados em programas síncronos.

//Para executar a função getUser(), já que ela retorna uma Promise, pode-se usar await:

exibeDadosUser(await getUser(1));

//Lembrando que await só funciona se estiver dentro de outra função async. Caso não esteja, você ainda pode usar .then() normalmente:

getUser(1).then(exibeDadosUser).catch(reject);

//Resolvendo várias promessas

//No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar async/await em conjunto com Promise.all:

async function getUser(userId) {
  let response = await fetch(`https://api.com/api/user/${userId}`);
  let userData = await response.json();
  return userData;
}

let [user1, user2] = await Promise.all([getUser(1), getUser(2)]);

//Diferenças entre .then() e async/await

//Em termos de sintaxe, o método .then() traz uma sintaxe que faz mais sentido quando utilizamos o JavaScript de forma funcional, enquanto o fluxo das declarações com async/await fazem sentido ao serem utilizadas em métodos de classes.

/* O async/await surgiu como uma opção mais "legível" ao .then(), mas é importante notar que estes métodos não são logicamente equivalentes: enquanto async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez. */

//Como resolver esse tipo de caso, por exemplo, requisitando uma array de id de pedidos de determinado cliente de um comércio:

async function getCustomerOrders(customerId) {
  const response = await fetch(`https://api.com/api/customer/${customerId}`);
  const customer = await response.json();

  return await Promise.all(
    customer.orders.map(async (orderId) => {
      const response = await fetch(`https://api.com/api/order/${orderId}`);
      const orderData = await response.json();
      return orderData.amount;
    })
  );
}

//No caso acima, usamos Promise.all para fazer as requisições em paralelo, sem aguardar a anterior retornar para fazer a próxima.

//Iterações com async/await

//Mas e se precisarmos manejar várias Promises, mas não quisermos fazer isso em paralelo? Um exemplo clássico desta situação é acessar um banco de dados com milhares de registros. Neste caso, não queremos que todas as requisições sejam feitas em paralelo, pois o excesso de requisições simultâneas pode causar problemas de performance e até derrubar o serviço.

//Neste caso o async/await é mais indicado, pois vai resolver uma Promise por vez.

//async function printCustomer(customerId){
//lógica fictícia da função};

async function getAndPrintAllCustomers() {
  //lógica ficticia da função
  const sql = "SELECT id FROM customers";
  const customers = await db.query(sql, []);
  for (const customer of customers) {
    await printCustomer(customer.id);
  }
}

//No caso acima, não queremos fazer todas as requisições ao banco de uma vez, e sim de forma sequencial.
