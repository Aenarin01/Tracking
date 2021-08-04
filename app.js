const express = require("express");
const bodyParser = require('body-parser')
const keys = require('./configs/keys')
const app = express();
const db = require("./models");
const path = require('path')
const authRoutes = require('./routes/auth')
const passport = require("passport");

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(passport.initialize())
require('./middleware/passport')(passport)

require("./routes/user")(app);
app.use('/api/auth', authRoutes)

db.sequelize.sync();
app.listen(3020, () => console.log(`Server is working on ${3020}`));



