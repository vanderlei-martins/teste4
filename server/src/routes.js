const express = require('express');
const UsersController = require('./app/controllers/UsersController');

const routes = express.Router();

routes.post('/users', UsersController.post);
routes.get('/users', UsersController.index);
routes.post('/users/auth', UsersController.auth);


module.exports = routes;