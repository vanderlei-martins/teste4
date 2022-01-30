// testes de autenticação nas rotas

const express = require('express');
const middlewareAuth = require('../middleware/auth');

const router = express.Router();

router.use(middlewareAuth);

router.get('/', (req, res) => {
    res.send({ msg: 'ok autenticacao', id: req.idUser})
});

module.exports = app => app.use('/auth', router);