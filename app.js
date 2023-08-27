require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

// Configuración de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// Modelos
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronizar los modelos con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("Modelos sincronizados con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar los modelos:", error);
  });

// Configuración de la aplicación Express
const app = express();
app.use(express.json());

// Endpoint POST para crear un usuario
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Crear un nuevo usuario en la base de datos
    const newUser = await User.create({ name, email });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Endpoint GET para obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    // Obtener todos los usuarios de la base de datos
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
