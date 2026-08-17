// Importa o Express
const express = require("express");

// Cria um objeto Router para organizar as rotas
const router = express.Router();

// Importa as funções dos controllers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

// Rota GET para listar todos os usuários
router.get("/users", getAllUsers);

// Rota POST para cadastrar um novo usuário
router.post("/users", createUser);

// Rota GET para buscar um usuário específico pelo ID
router.get("/users/:id", getUserById);

// Rota PUT para atualizar um usuário pelo ID
router.put("/users/:id", updateUser);

// Rota DELETE para remover um usuário pelo ID
router.delete("/users/:id", deleteUser);

// Exporta as rotas para serem utilizadas pelo server.js
module.exports = router;
