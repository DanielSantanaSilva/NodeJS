//NPM - Gerenciador de pacotes do Node

/*Sempre que vamos trabalhar com um projeto em NodeJS do zero, uma das primeiras coisas que fazemos é criar um arquivo de configuração utilizando o comando npm init ou yarn init, assim como para todas as instalações de libs externas utilizamos o comando npm install <nome do pacote> ou yarn add <nome do pacote>.

Gerenciadores de pacotes são repositórios de código aberto nos quais devs disponibilizam soluções para o uso da comunidade. Estas soluções nada mais são do que programas que outras pessoas desenvolveram e que utilizamos para ganhar tempo no desenvolvimento de nosso próprio código, e vão desde libs (bibliotecas) pequenas e específicas até frameworks com vários recursos prontos. E um pacote (ou módulo) é como chamamos o conjunto - podemos pensar em um pacote mesmo - do código que determinada lib ou framework utiliza para executar.

Algumas dessas bibliotecas são desenvolvidas por times para resolver algum problema específico que tiveram que enfrentar. Depois elas são disponibilizadas para que outras pessoas com o mesmo contratempo aproveitem e também utilizem. Outras são disponibilizadas por empresas de software que utilizam as plataformas dos gerenciadores para a distribuição de suas soluções de código. E sendo de código aberto, isso significa que você também pode criar e publicar a sua lib para outras pessoas baixarem e instalarem em seus projetos.*/

//Instalação local vs global

/* Estes pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual foi instalado através da pasta node_modules, e globalmente, sendo instalados em um diretório geral do NPM e ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.

Na maior parte das vezes, você vai utilizar a opção local, com os comandos npm install <nome do pacote> ou yarn add <nome do pacote>, pois fica mais fácil fazer o gerenciamento de versão das libs que utilizamos e muitas vezes, um pacote que instalamos “puxa” um ou vários outros pacotes auxiliares que ele precisa para funcionar. O ideal é não poluir o diretório global com libs que poderão ser utilizadas em somente um projeto.

Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma. Para fazer uma instalação global de pacotes, utilizamos os comandos npm install -g <nome do pacote> ou yarn add global <nome do pacote>.

O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes. */
