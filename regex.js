// REGEX

//expressões regulares são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

//Pode ser que você já conheça alguns dos meta-chars usados em expressões regulares sem saber. Por exemplo, quando procuramos no campo de busca do computador por qualquer arquivo de extensão jpg com *.jpg. É claro que as expressões regulares podem ir de muito simples até extremamente complexas, então você não precisa se preocupar em decorar todos os meta-chars ou como eles se comportam; sempre é possível consultar sites como regex101 ou o guia do MDN.

//Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares; no caso do JavaScript podemos usar // e salvar o padrão em uma variável, como foi feito nos vídeos, ou utilizar o construtor new RegExp():

const regex = /[a-zA-z\s]/;

//ou

let regex1 = new RegExp("[a-zA-zs]");

//Para trabalhar com as regex em nosso código, podemos utilizar alguns métodos próprios de string, como match() (que usamos no vídeo), search(), replace(), matchAll() e split(). Você pode consultar mais sobre estes métodos no MDN. Além disso, o JavaScript também tem alguns métodos próprios do objeto RegExp: test() e exec().

//Montando a expressão para capturar apenas a parte do protocolo e do domínio principal de cada link, por exemplo <protocolo>://<dominioprincipal.com>/.

/*texto1md: 

São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)
*/

// todos os links começam da mesma forma, a partir de http, e terminam na primeira /. Então podemos começar a expressão dessa forma: https?: a sequência exata de letras http e s ocorrendo de 0 até 1 vez.

//Em seguida temos :// que sempre ocorre da mesma forma: https?:\/\/: como / é um meta-char, temos que usar a barra invertida para “escapar” este char, ou seja, para que seja considerado literalmente e não como meta-char.

//A primeira classe, ou seja, o primeiro conjunto de caracteres antes do ., permanece: https?:\/\/[^\s$.?#].: todos os caracteres exceto $, ., ?, # e sem espaços em branco \s.

//Agora a expressão deve parar que capturar os caracteres logo após a primeira /, então a segunda classe de caracteres vai ficar um pouco diferente: https?:\/\/[^\s$.?#].[^\/\s]: após o ponto, todos os caracteres com exceção de \s (espaços em branco) e agora também \/, barra. Lembrando que / deve ser “escapada” para ser considerada como um caractere e não um meta-char.

//Agora podemos finalizar, fazendo a expressão parar na primeira barra: https?:\/\/[^\s$.?#].[^\/\s]*\/: acrescentamos * ao final, para que a expressão localize 0 ou mais ocorrências consecutivas entre . e /. Ou seja, para que a expressão localize tanto https://dominio.com/ quanto https://www.dominio.com.br/.

//regex completo: https?:\/\/[^\s$.?#].[^\/\s]*\/*

//Saida regex:
/* 
https://developer.mozilla.org/
https://developer.mozilla.org/
https://developer.mozilla.org/
https://developer.mozilla.org/
https://developer.mozilla.org/
*/
