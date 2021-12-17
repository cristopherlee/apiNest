# PROCESSO SELETIVO CERTI - FULL STACK DEVELOPER ANGULAR (Júnior a Pleno)

## Teste teórico (20min)

O teste teórico é composto de algumas perguntas-problema, cuja resposta deve ser em código. Nela, avaliamos a capacidade de interpretação de texto e pensamento lógico e desenvolvimento de algorítmos.

Para realizá-lo, você deve acessar o nosso [ambiente de testes do InterviewZen](https://www.interviewzen.com/apply/9QLCCN).

Preencha seu nome e e-mail, e clique em **"Start the Interview"**. Cada questão tem um timer que conta o tempo total que você levou no problema. Ao concluir cada problema, clique no botão **"Submit solution"**.

Quando acabar o teste, **envie o link do resultado para interview@certi.org.br**.

**Nota:** você só pode realizar o teste uma vez, e não pode editar seu código após enviar a solução. Tentativas de trapaça desclassificarão o candidato imediatamente.

## Teste prático (7 dias)

Você foi escolhido para escrever uma PoC (Prova de Conceito) de um e-commerce, basicamente o sistema consiste na criação de Pedidos (cliente + produtos + frete).

O usuário após logar no sistema selecionará a opção "Novo Pedido" para iniciar a venda. 

## Seguem os requisitos:

* A stack de tecnologia a ser utilizada é NestJS + Angular 12 ou Superior + Spring Boot
* O sistema é composto por 3 microsserviços: Serviço Web (Angular) + Serviço Api  (NestJS) + Serviço de Cálculo de Frete (Spring Boot)
* Banco de dados - NoSQL (MongoDB) ou SQL (PostgreSQL)
* Um dos microsserviços precisa consumir os endpoints de Cliente e Produtos e popular os dados no banco de dados. Vide seção [API com os Clientes e Produtos](#api-com-os-clientes-e-produtos)
* Tela de listagem dos pedidos
* Todas as informações precisam ser persistidas no banco de dados escolhido
* Documento descrevendo o processo de instalação do sistema
* O fluxo de autenticação é opcional, o mesmo poderá ser mockado para andamento do projeto
* O Sistema deverá implementar o fluxo baseado nos arquivos de Design listados no item [Arquivos](#arquivos)

## API com os Clientes e Produtos
A lista de clientes e de produtos está disponível via API. A documentação da API está no [Apiary](https://maximatech.docs.apiary.io/#reference/0/fullstack/)

## Microserviço de Cálculo de Frete
O microserviço de cálculo de frete terá um webservice que  receberá a quantidade de itens que foram selecionados e multiplicará por um valor aleatório entre R$5,00 e R$10,00. Retornando assim o valor calculado.

### Exemplo
Foram selecionados 2 itens do Produto A e 1 item do Produto B, logo teremos 3 itens. O valor sorteado foi R$ 8,00. Assim: 3 x R$ 8,00 = R$ 24,00.

## Diferenciais

* Utilização de docker
* Load Balancer
* Utilização do Service Discovery e Api Gateway
* Desenho Arquitetural
* Escrita de testes

### Requisitos:
	
- **Frameworks:** o uso de frameworks é **opcional**; você pode usar os frameworks Laravel ou Symfony, ou qualquer microframework PHP (Silex, Slim, Lumen, Bullet). Daremos preferência para aqueles que utilizarem **NestJS** e **NodeJS**.
- **Bibliotecas:** devem sempre ser carregadas via **[Composer](https://getcomposer.org/)** ou de sua preferência; qualquer pacote do Packagist é permitido
- **Front-end:** pode ser usado, **opcionalmente**: React.js ou AngularJS; para a landing page, **opcionalmente** podem ser usados grids prontos ou o Bootstrap.

### Bonus
As tarefas bonus são opcionais, mas contam pontos no processo seletivo. Elas nos ajudam a identificar não só a pro-atividade, mas também suas habilidades em organização de código, arquitetura, etc. Por exemplo: uso de **NGXS** terão preferência.
- **Bonus #1:** Utilizar NGXS.
- **Bonus #2:** montar uma tela com Bootstrap e VueJS/AngularJS para consumir a API e listar os nomes e e-mails recebidos, com um botão "Enviar" que chama o método de envio.
- **Bonus #3:** colocar essa tela atrás de uma área logada, e criar um método na API para registrar um usuário (recebendo e-mail e senha)

### O que será avaliado
- SEO e semântica de HTML
- Organização e legibilidade de código e projeto
- Utilização de padrões arquiteturais
- Clareza do código
- Ausência de crashes e bugs
- Atenção às especificações, requisitos e restrições
- Tempo de desenvolvimento
- Atenção ao detalhe
- Segurança da informação

### Deferenciais
- Utilização de docker
- Load Balancer
- Utilização do Service Discovery e Api Gateway
- Desenho Arquitetural
- Escrita de testes

### Como desenvolver e entregar o teste:
- Inicie criando (se já não possuir) uma conta. Sugerimos se cadastrar via GitHub.
- Após cadastrar sua conta, crie um novo Workspace público, de nome **"teste-fullstack-lqdi"**, com o template **"PHP"**.
- Caso não esteja familiarizado com o Cloud9, sugerimos que crie um workspace de testes para experimentar. Recomendamos observar o guia ["Setting up MySQL"](https://community.c9.io/t/setting-up-mysql/1718) para entender como usar o MySQL no seu projeto.
- **Imediatamente** ao iniciar o desenvolvimento, você deve convidar o usuário "dfkimera" ao projeto, através do botão "Share" no canto superior direito, com acesso **"RW"** (a chave RW deve estar visível). **Marque em um papel a data e hora que iniciou.**
- Ao concluir o projeto, envie um e-mail para **aryel.tupinamba@lqdi.net** com a URL do editor, a data e hora que iniciou e a data e hora que concluiu o projeto. Se quiser, pode complementar dizendo o que achou do teste, quais escolhas você realizou ao longo do desenvolvimento, quais pontos achou mais trabalhoso, etc.
- **Nota:** você só pode realizar o teste uma vez, e não pode editar seu código após enviar a solução. Tentativas de trapaça desclassificarão o candidato imediatamente.

# Dúvidas

Entre em contato com talentoshumanos@certi.org.br