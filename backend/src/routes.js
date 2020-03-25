const express = require('express');

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

routes.post('/users', (request, response) => {
    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Caralho Mane',
    });
});

module.exports = routes;