# Atividade 01 - Laboratório de Programação Full Stack (Sistema de Cadastro, Login e Gerenciamento de Usuários)
### Universidade de Vassouras - Engenharia de Software - Professor Fabrício Dias - 29/08/2024

### Este projeto implementa um sistema completo de autenticação e gerenciamento de usuários utilizando Node.js, Express, Sequelize, PostgreSQL e JSON Web Token (JWT).

### COMANDOS PARA CONFIGURAÇÃO USANDO POSTGRESQL

 - ```npm init -y```
 - ```package.json```
"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
}
 - ```npm install express sequelize pg pg-hstore jsonwebtoken bcryptjs dotenv```
 - ```npm install --save-dev nodemon```
 - ```npm install -g sequelize-cli```
 - ```sequelize --version```
 - ```npx sequelize-cli init```

 - Configure o arquivo para usar o PostgreSQL: ```config/config.json```
{
  "development": {
    "username": "postgres",
    "password": "123",
    "database": "lab_prog_fullstack_atividade_01",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "123",
    "database": "lab_prog_fullstack_atividade_01",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "123",
    "database": "lab_prog_fullstack_atividade_01",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

 - Conentando no Postgres: ```psql -U postgres -h localhost```
 - Criando banco de dados: ```CREATE DATABASE lab_prog_fullstack_atividade_01;```
 - ```npx sequelize-cli migration:generate --name create-user-table```
 - ```npx sequelize-cli db:migrate```
 - Iniciar o servidor: ```npm run dev```

## Funcionalidades

- **Cadastro de Usuário:** Permite que um novo usuário se cadastre fornecendo `username`, `email` e `password`. A senha é armazenada de forma segura utilizando bcrypt.
- **Login de Usuário:** Autentica um usuário utilizando `email` e `password`, gerando um token JWT com validade de 1 hora.
- **Listagem de Usuários:** Fornece uma rota protegida que lista todos os usuários cadastrados. Apenas usuários autenticados podem acessar essa rota.
- **Atualização de Usuário:** Permite que o usuário atualize seu `username` e `email`. Apenas o próprio usuário pode atualizar suas informações.
- **Deleção de Usuário:** Permite que o usuário delete sua própria conta. Apenas o próprio usuário pode deletar sua conta.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Sequelize** (ORM)
- **PostgreSQL** (Banco de Dados)
- **JWT** (JSON Web Token para autenticação)
- **bcryptjs** (Hash de senhas)

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e configurado
- Git (opcional, para clonar o repositório)
- npm install (para instalar as dependências)
