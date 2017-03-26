const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = process.env;
const dbConfig = {
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  dialect: config.DB_DIALECT,
  host: config.DB_HOSTNAME,
};

const db = {};
const basename = path.basename(module.filename);
const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, dbConfig);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import((path.join(__dirname, file)));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
