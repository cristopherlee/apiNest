## Tarefa Desafio API Rst NestJs
Equipe de FRONT e BACK elaborar uma api rest com NEST desenvolvendo endpoints para o crud.

Definition of done
 - [x] NestJs
 - [x] Docker
 - [x] Swagger
 - [x] Crud
 - [x] Documentação
 - [x] Apresentação
 
EXTRAS:  
 - [x] Testes
 - [x] Log
 - [x] Padrão

 ---------------------

##### Links de acesso: 
> API
> - localhost:3000/users

> BANCO 
> - localhost:8080
>
>servidor: pgsql
user:     pguser
password: pgpassword
---------------------

##### Versão atual do projeto
1.0.0.0

---------------------
##### Links úteis

[LINK DA APRESENTAÇÃO](https://docs.google.com/presentation/d/1tVDc5Vw4MvyhIA1yJ-u24kkOpmsntx_EJo9sRuMCICI/edit?usp=sharing)

[LINK DO REPOSOTÓRIO](https://github.com/Maryucha/tarefaDesafio)

[LINK DO TUTORIAL](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)

---------------------
### Estrutura de pastas
 Aqui temos listados as pastas que estão no projeto

> - dist: Pasta que contém os arquivos de build da API
> - logs: Contém o arquivo de log da api
>  - src: 
    >> - configs: Contem arquivos de configuração do ORM e do Winston que faz o log
    >> - Interceptors: Arquivo responsável em observar a api e seus estados, populando o arquivo de log;
    >> - Users: Pasta que representa todo o módulo de usuário e suas camadas.
---------------------

### Tecnologias utilizadas
Aqui temos listados algumas das tecnologias usadas no projeto.

- PostgreSQL V 0.0
- NestJs
- Docker
- Jest
- Swagger
- TypeOrm
- Winston

---------------------
### Install the app

```bash
$ npm install
```

### Running the app

```bash
# watch mode
$ npm run start:dev
```

### Test

```bash
# JEST tests
$  npm run test:watch
```
---------------------
> Autor
 >- Fundação CERTI

---------------------
#### PROPOSTA DE CONVEÇÃO PARA PADRÃO DE NOMENCLATURA

- Ao usar as convenções de nomenclatura, você facilita a leitura do código para você e outros programadores. A legibilidade do programa é muito importante. Isso indica que - menos tempo é gasto para descobrir o que o código faz.

- A seguir, estão as principais regras que devem ser seguidas por todos os identificadores:

> - O nome não deve conter espaços em branco.
> - O nome não deve começar com caracteres especiais como & (e comercial), $ (dólar), _ (sublinhado).
> - quando você decide como nomear seus identificadores, como classe, pacote, variável, constante, método etc.

##### Classe
- Deve começar com a letra maiúscula.
- Deve ser um substantivo como Cor, Botão, Sistema, Tópico, etc.
- Use palavras apropriadas, em vez de siglas

> Exemplo:
> public class Employee {  
>     //fragmento de código  
> }  
>

##### Interface
- Deve começar com a letra maiúscula.
- Deve ser um adjetivo como Runnable, Remote, ActionListener.
- Use palavras apropriadas, em vez de siglas.

> Exemplo:
> 
> interface Printable {  
>      //fragmento de código  
> }
>   


##### Método
- Deve começar com letra minúscula.
- Deve ser um verbo como main(), print(), println().
- Se o nome contiver várias palavras, inicie-o com uma letra minúscula seguida por uma letra maiúscula, como actionPerformed().

> Exemplo
> 
> class Employee  {  
>     //método  
>     void desenhar()  {  
>         //fragmento de código  
>     }  
> }
>

##### Variável
- Ele deve começar com uma letra minúscula, como id, nome.
- Não deve começar com caracteres especiais como & (e comercial), $ (dólar), _ (sublinhado).
- Se o nome contiver várias palavras, inicie-o com a letra minúscula seguida por uma letra maiúscula como firstName, lastName.
- Evite usar variáveis de um caractere, como x, y, z.

> Exemplo
>
> class Employee {  
>      //variável  
>     int  id;  
>     //fragmento de código  
>   }  


##### Pasta
- Deve ser uma letra minúscula, como core, lang.
- Se o nome contiver várias palavras, ele deverá ser separado por pontos (.) Como core.util, core.lang.

> Exemplo

> core com.config; //pasta  
>class Employee {  
>    //fragmento de código  
> }  


##### Constante
- Deve estar em letras maiúsculas, como VERMELHO, AMARELO.
- Se o nome contiver várias palavras, ele deverá ser separado por um sublinhado (_), como MAX_PRIORITY.
- Pode conter dígitos, mas não como a primeira letra.

>Exemplo
>
> class Employee {  
>   //constante&  
>   final static int MIN_AGE = 18 ;  
>    //fragmento de código  
>}  


##### CamelCase em convenções de nomenclatura
Podemos seguir a sintaxe camelCase para nomear a classe, interface, método e variável.

- Se o nome for combinado com duas palavras, a segunda palavra começará com letras maiúsculas sempre como actionPerformed(), firstName, ActionEvent, ActionListener, etc.  