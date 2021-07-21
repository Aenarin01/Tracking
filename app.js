const express = require("express");
const bodyParser = require('body-parser')
const keys = require('./configs/keys')
const app = express();
const db = require("./models");


app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

require("./routes/user")(app);


db.sequelize.sync();
app.listen(3020, () => console.log(`Server is working on ${3020}`));

app.get("/hello", function (request, response) {

    response.send({result: 'Hello'});
});


