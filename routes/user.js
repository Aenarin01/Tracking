module.exports = app => {
    const passport = require('passport')
    const user = require("../controllers/user.js");
    const router = require("express").Router();


    router.post("/", passport.authenticate('jwt', {session: false}), user.create);

    router.get("/", passport.authenticate('jwt', {session: false}), user.findAll);

    router.get("/:id", passport.authenticate('jwt', {session: false}), user.findOne);

    router.put("/:id", passport.authenticate('jwt', {session: false}), user.update);

    router.delete("/:id", passport.authenticate('jwt', {session: false}), user.delete);

    app.use('/api/user', router);
}
