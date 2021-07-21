const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')


module.exports.create = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(password,salt),
        role: req.body.role || 'basic'
    };
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

module.exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll({attributes: ['id','name','email','role']})
            .then(data => {
            res.send(data)
        })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.findOne = async function (req, res) {
    try {
        const user = await User.findByPk(req.params.id,{attributes: ['id','name','email','role']})
            .then(data => {
            res.send(data)
        })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function (req, res) {
    const id = req.params.id;
    try {
    const user = await User.update({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }, {
        where: {id: id}
    })
         await User.findByPk(req.params.id,{attributes: ['id','name','email','role']})
            .then(data=>{
            res.send(data)
        })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
}

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
