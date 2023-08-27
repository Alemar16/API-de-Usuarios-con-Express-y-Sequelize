# API de Usuarios con Express y Sequelize

Esta API de Usuarios es una aplicación básica que utiliza Express como framework web y Sequelize como ORM para interactuar con una base de datos PostgreSQL. Permite crear y obtener usuarios a través de endpoints RESTful.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize
- PostgreSQL

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes componentes:

- Descarga e instala [Node.js] (https://nodejs.org)
- Descarga e instala [PostgreSQL](https://postgresql.org) u otra base de dato relacionada y ten las credenciales correspondientes

## Configuración

1. Clona este repositorio en tu máquina local:

  ```bash
  git clone https://github.com/tu-usuario/tu-repositorio.git
 ```

2. Navega hasta el directorio del proyecto:

```bash
 cd tu-repositorio
```

3. Instala las dependencias del proyecto:

```bash
  npm install
```

4. Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno con tus credenciales de PostgreSQL:

```bash
  DB_NAME=tu-nombre-de-base-de-datos
  DB_USER=tu-nombre-de-usuario
  DB_PASSWORD=tu-contraseña
  DB_HOST=tu-host
```

Asegúrate de no compartir este archivo `.env` en tu repositorio para mantener tus credenciales seguras. Asegúrate de agregar `.env` a tu archivo `.gitignore`.

5. Inicia la aplicación:

```bash
  npm start
```

La aplicación se ejecutará en `http://localhost:3000`.

## Uso

La API proporciona los siguientes endpoints:

- POST /users: Crea un nuevo usuario. Debes enviar un objeto JSON en el cuerpo de la solicitud con las propiedades name y email.

- GET /users: Obtiene todos los usuarios registrados en la base de datos.

Recuerda ajustar la configuración de la aplicación según tus necesidades antes de usarla en producción.

## ¡Listo! Ahora puedes comenzar a utilizar la API de Usuarios con Express y Sequelize.
