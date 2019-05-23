const env = require('../environments/db.env.js');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    timezone: '+08:00',
  
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.system_users = require('../api/models/system_users.model.js')(sequelize, Sequelize);


  module.exports = db;


