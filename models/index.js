
const keys = require('../configs/keys.js')

const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(keys.DB, keys.USER, keys.PASSWORD, {
    host: keys.HOST,
    port: keys.PORT,
    dialect: keys.dialect,
    operatorsAliases: 0,
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

db.user.hasMany(db.events)


module.exports = db;
