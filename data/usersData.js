// Módulo do Node.js responsável por ler e escrever arquivos
const fs = require("fs");

// Módulo do Node.js utilizado para trabalhar com caminhos de arquivos
const path = require("path");

// Define o caminho do arquivo onde os usuários serão armazenados
const usersFile = path.join(__dirname, "users.json");

// Lê os usuários armazenados no arquivo JSON
function getUsers() {
  const data = fs.readFileSync(usersFile, "utf-8");

  // Converte o conteúdo JSON para um objeto/array JavaScript
  return JSON.parse(data);
}

// Salva a lista de usuários no arquivo JSON
function saveUsers(users) {
  // Converte os dados JavaScript para JSON e mantém o arquivo organizado
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Gera o próximo ID disponível para um novo usuário
function getNextId(users) {
  // Se não houver usuários, o primeiro ID será 1
  if (users.length === 0) {
    return 1;
  }

  // Encontra o maior ID existente e adiciona 1
  return Math.max(...users.map((user) => user.id)) + 1;
}

// Exporta as funções para que outros arquivos da API possam utilizá-las
module.exports = {
  getUsers,
  saveUsers,
  getNextId,
};
