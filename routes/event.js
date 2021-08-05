const express = require('express')
const controller = require('../controllers/event')
const router = express.Router()
const passport = require('passport')

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

router.post('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

router.get('/:id', passport.authenticate('jwt', {session: false}), controller.findOneEvent)


module.exports = router
