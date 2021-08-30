const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const db = require("./models");
const Multer = require("multer");
const authRoutes = require('./routes/auth')
const eventRoutes = require('./routes/event')
const passport = require("passport");
const minioService = require('./utils/minioService')

app.use(require('morgan')('dev'))
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.post("/api/upload", Multer({storage: Multer.memoryStorage()}).single("filename"), function(request, response) {
    minioService.minioClient.putObject("images", request.file.originalname, request.file.buffer, function(error, etag) {
        if(error) {
            return console.log(error);
        }
        response.send(request.file.originalname);
    });
});

app.get("/api/download", function(request, response) {
    minioService.minioClient.getObject("images", request.query.filename, function(error, stream) {
        if(error) {
            return response.status(500).send(error);
        }
        stream.pipe(response);
    });
});

app.delete("/api/delete", function(request, response) {
    minioService.removeObject("images", request.query.filename, function(error) {
        if(error) {
            return response.status(500).send(error);
        }
        response.send({"deleted": true, "filename": request.query.filename});
    });
});

require("./routes/user")(app);
app.use('/api/auth', authRoutes)
app.use('/api/event', eventRoutes)


db.sequelize.sync();
app.listen(3020, () => console.log(`Server is working on ${3020}`));



