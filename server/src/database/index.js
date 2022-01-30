const Sequelize = require('sequelize');
const configsDB = require('../config/db');

const connection = new Sequelize(configsDB);
module.exports = connection;