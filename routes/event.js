const express = require('express')
const controller = require('../controllers/event')
const router = express.Router()
const upload = require('../middleware/upload')
const passport = require('passport')
const Multer = require("multer");

router.post('/', passport.authenticate('jwt', {session: false}),Multer({storage: Multer.memoryStorage()}).single('imageSrc'), controller.create)

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

router.get('/all', passport.authenticate('jwt', {session: false}), controller.getEvents)

router.get('/:id', passport.authenticate('jwt', {session: false}), controller.findOneEvent)

router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

router.put("/:id", passport.authenticate('jwt', {session: false}), upload.single('imageSrc'), controller.update);



module.exports = router
