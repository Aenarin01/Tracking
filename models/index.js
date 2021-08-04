
const keys = require('../configs/keys.js')

const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(keys.DB, keys.USER, keys.PASSWORD, {
    host: keys.HOST,
    port: keys.PORT,
    dialect: keys.dialect,
    operatorsAliases: false,
    logging: false,
    pool: {
        max: keys.pool.max,
        min: keys.pool.min,
        acquire: keys.pool.acquire,
        idle: keys.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.events = require("../models/events.js")(sequelize, Sequelize);
db.user = require("../models/User.js")(sequelize, Sequelize);



module.exports = db;
