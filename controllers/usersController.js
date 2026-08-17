// Importa as funções responsáveis pelo armazenamento dos dados
const { getUsers, saveUsers, getNextId } = require("../data/usersData");

// Lista todos os usuários
function getAllUsers(req, res) {
  // Obtém os usuários armazenados
  const users = getUsers();

  // Retorna a lista com status 200
  res.status(200).json(users);
}

// Cadastra um novo usuário
function createUser(req, res) {
  // Obtém os dados enviados pelo cliente
  const { name, email } = req.body;

  // Verifica se os campos obrigatórios foram preenchidos
  if (!name || !email) {
    return res.status(400).json({
      error: "Nome e e-mail são obrigatórios",
    });
  }

  // Obtém os usuários já cadastrados
  const users = getUsers();

  // Gera um novo ID para o usuário
  const newUser = {
    id: getNextId(users),
    name,
    email,
  };

  // Adiciona o novo usuário à lista
  users.push(newUser);

  // Salva a lista atualizada no arquivo JSON
  saveUsers(users);

  // Retorna o usuário criado dentro do campo "data"
  res.status(201).json({
    data: newUser,
  });
}

// Busca um usuário pelo ID informado na URL
function getUserById(req, res) {
  // Obtém os usuários armazenados
  const users = getUsers();

  // Obtém o ID enviado pelo cliente na URL
  const id = Number(req.params.id);

  // Procura o usuário correspondente ao ID
  const user = users.find((user) => user.id === id);

  // Caso o usuário não exista, retorna erro 404
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  // Caso encontre o usuário, retorna os dados com status 200
  res.status(200).json(user);
}

// Atualiza um usuário pelo ID informado na URL
function updateUser(req, res) {
  // Obtém os usuários armazenados
  const users = getUsers();

  // Obtém o ID enviado pelo cliente na URL
  const id = Number(req.params.id);

  // Localiza a posição do usuário dentro do array
  const index = users.findIndex((user) => user.id === id);

  // Caso o usuário não exista, retorna erro 404
  if (index === -1) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  // Obtém os novos dados enviados pelo cliente
  const { name, email } = req.body;

  // Atualiza os dados do usuário mantendo o mesmo ID
  users[index] = {
    id: users[index].id,
    name,
    email,
  };

  // Salva os dados atualizados
  saveUsers(users);

  // Retorna o usuário atualizado com status 200
  res.status(200).json(users[index]);
}

// Remove um usuário pelo ID informado na URL
function deleteUser(req, res) {
  // Obtém os usuários armazenados
  const users = getUsers();

  // Obtém o ID enviado pelo cliente na URL
  const id = Number(req.params.id);

  // Localiza a posição do usuário dentro do array
  const index = users.findIndex((user) => user.id === id);

  // Caso o usuário não exista, retorna erro 404
  if (index === -1) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  // Remove o usuário encontrado do array
  const deletedUser = users.splice(index, 1);

  // Salva a lista atualizada no arquivo JSON
  saveUsers(users);

  // Retorna o usuário removido com status 200
  res.status(200).json(deletedUser[0]);
}

// Exporta as funções para serem utilizadas pelas rotas
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
