const Sequelize = require('sequelize');
const sequelize = new Sequelize('lab_prog_fullstack_atividade_01', 'postgres', '123', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
