const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require("../models");
const User = db.user;
const keys = require('../configs/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.login = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        const passwordResult = bcrypt.compare(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                id: candidate._id,
                role: candidate.role
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // Пароли не совпали
            res.status(401).json({
                message: 'Пароли не совпадают. Попробуйте снова.'
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: 'Пользователь с таким email не найден.'
        })
    }
}


module.exports.register = async function (req, res) {
    // email password
    const candidate = await User.findOne({where: {email: req.body.email}})

    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password
        const user = User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(password,salt),
            role: req.body.role || 'basic'
        }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

    }
}
