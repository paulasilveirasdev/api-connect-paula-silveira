const express = require("express");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
app.use(express.json());
app.use(usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
