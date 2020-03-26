const express = require('express');
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros / Paginacao).
 * Route Params: Parametros utilizados para identificar recursos.
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.create);
routes.delete('/messages/:id', MessageController.delete)

routes.get('/profiles', ProfileController.index);

module.exports = routes;