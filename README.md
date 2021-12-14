
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>



# Tarefa Desafio API Rst NestJs - Parte 2

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub issues](https://img.shields.io/github/issues/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest/issues)

[![GitHub pull requests](https://img.shields.io/github/issues-pr/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest/pulls)

[![GitHub stars](https://img.shields.io/github/stars/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest/stargazers)

[![GitHub forks](https://img.shields.io/github/forks/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest/network)

[![GitHub contributors](https://img.shields.io/github/contributors/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest/graphs/contributors)

[![GitHub license](https://img.shields.io/github/license/cristopherlee/apiNest)](https://github.com/cristopherlee/apiNest)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cristopherlee/apiNest)

![GitHub repo size](https://img.shields.io/github/repo-size/cristopherlee/apiNest)

## Table of contents

- [Tarefa Desafio API Rst NestJs - Parte 2](#tarefa-desafio-api-rst-nestjs---parte-2)
  - [Table of contents](#table-of-contents)
  - [Definition of done](#definition-of-done)
  - [Conteúdo](#conteúdo)
          - [Commitizen](#commitizen)
    - [Commitlint](#commitlint)
    - [ESLint](#eslint)
    - [Husky](#husky)
    - [Prettier](#prettier)
  - [Running the app](#running-the-app)
    - [development](#development)
    - [watch mode](#watch-mode)
    - [production mode](#production-mode)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Test](#test)
    - [unit tests](#unit-tests)
    - [e2e tests](#e2e-tests)
    - [test coverage](#test-coverage)


## Definition of done

Equipe de FRONT e BACK elaborar uma api rest com NEST desenvolvendo endpoints para o crud.

 - [x] Melhorias em testes unitários
 - [x] Utilização de variáveis de ambiente
 - [x] Melhorias na documentação do Swagger
 - [x] Uso de migrations e seeds
 - [x] Relatório de cobertura de testes
 - [x] Commits e versionamento semantico com hooks
 - [ ] Integração de 2 microserviços utilizando RabbitMQ
 
EXTRAS:  
 - [x] Versionamento Semântico
 - [x] Compodoc
 - [x] Lint-Staged
 - [x] Relacionamentos entre entidades com Seeding e onDelete Cascade

 ---------------------

 ## Conteúdo

###### Commitizen

[commitizen](https://github.com/commitizen/cz-cli) is a command line utility that makes it easier to create commit messages following the [conventional commit format](https://conventionalcommits.org) specification.

Use `git cz` instead of `git commit` to use commitizen.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

**Configuration file**: [`.czrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.czrc).

---

### Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

**Configuration file**: [`.commitlintrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.commitlintrc).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional
```

Are you a good `commitizen` ?

---
### ESLint

[ESLint](https://eslint.org/) is a fully pluggable tool for identifying and reporting on patterns in JavaScript.

**Configuration file**: [`.eslintrc.js`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.eslintrc.js).

For more configuration options and details, see the [configuration docs](https://eslint.org/docs/user-guide/configuring).

---

### Husky

[Husky](https://github.com/typicode/husky) is a package that helps you create Git hooks easily.

**Configuration file**: [`.huskyrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.huskyrc).

---

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter.

**Configuration file**: [`.prettierrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.prettierrc).  
**Ignore file**: [`.prettierignore`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.prettierignore).

For more configuration options and details, see the [configuration docs](https://prettier.io/docs/en/configuration.html).

---

## Running the app

### development

```bash
npm run start
```

### watch mode

```bash
npm run start:dev
```

### production mode

```bash
npm run start:prod
```

---

## Code scaffolding

Run `nest generate|g <schematic> <name> [options]` to generate a new Nest Element.

---

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Test

### unit tests

```bash
npm run test
```

### e2e tests

```bash
npm run test:e2e
```

### test coverage

```bash
npm run test:cov
```

---