
const env = {
    database: 'testdb',
    username: 'testdbdbuser',
    password: 'testdbpass',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };

module.exports = env;
