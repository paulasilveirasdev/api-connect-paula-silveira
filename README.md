API Connect
Objetivo
A API Connect é uma API REST desenvolvida para realizar o gerenciamento de usuários de uma aplicação. O sistema permite cadastrar, listar, consultar, atualizar e remover usuários, utilizando requisições HTTP e respostas em formato JSON.
O projeto foi desenvolvido como parte das atividades práticas de desenvolvimento back-end, aplicando conceitos de arquitetura REST, semântica HTTP, validação de dados e organização de uma API.

Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* JSON
* Git
* GitHub
* Thunder Client para testes das requisições

Como executar o projeto
1. Instalar as dependências
Após clonar ou baixar o projeto, abra o terminal na pasta do projeto e execute:
bash
npm install
 2. Iniciar o servidor
Execute:
bash
node server.js
O servidor será iniciado em:
text
http://localhost:3000

4. Testar a API
As requisições podem ser realizadas utilizando ferramentas como Thunder Client, Postman ou Insomnia.
Endpoints

| Método | Endpoint     | Descrição                   | Status esperado        |
| ------ | ------------ | --------------------------- | ---------------------- |
| POST   | `/users`     | Cadastra um novo usuário    | 201 Created            |
| GET    | `/users`     | Lista todos os usuários     | 200 OK                 |
| GET    | `/users/:id` | Busca um usuário pelo ID    | 200 OK / 404 Not Found |
| PUT    | `/users/:id` | Atualiza um usuário pelo ID | 200 OK / 404 Not Found |
| DELETE | `/users/:id` | Remove um usuário pelo ID   | 200 OK / 404 Not Found |

Exemplos de requisições

Criar usuário
POST /users

json
{
  "name": "Ana",
  "email": "ana@email.com"
}
Resposta de sucesso:
json
{
  "data": {
    "id": 1,
    "name": "Ana",
    "email": "ana@email.com"
  }
}

Status:

`text
201 Created

Listar usuários
GET /users

Retorna todos os usuários cadastrados.
Status:
text
200 OK
Buscar usuário
GET /users/1
Retorna o usuário correspondente ao ID informado.

Status:
text
200 OK
Caso o usuário não exista:
json
{
message: "Usuário não encontrado"
}
Status:
text
404 Not Found
Atualizar usuário
PUT /users/1
json
{
  "name": "Ana Silva",
  "email": "ana.silva@email.com"
}


Status:
text
200 OK
Remover usuário
DELETE users/1

Remove o usuário correspondente ao ID informado.
Status:
text
200 OK
Caso o usuário não exista:
text
404 Not Found

Validação
A API verifica os campos obrigatórios durante o cadastro. O nome e o e-mail devem ser informados para que o usuário seja criado.

Quando os dados obrigatórios não são enviados, a API retorna:
json
{
  "error": "Nome e e-mail são obrigatórios"
}

Status:
text
400 Bad Request
Estrutura do projeto
text
projeto-2-api-connect/
├── controllers/
├── data/
│   ├── users.json
│   └── usersData.js
├── routes/
│   └── usersRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
