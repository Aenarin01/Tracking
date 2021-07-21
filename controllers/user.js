const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const errorHandler = require('../utils/errorHandler')


module.exports.create = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
       password: req.body.password
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
        const users = await User.findAll({}).then(data => {
            res.send(data)
        })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.findOne = async function (req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function(req, res) {

    const id = req.params.id;
    try {
        const user = await User.update(req.body, {
        where: {id: id}
    }).then(data => {
            res.send(data);
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

// module.exports.update = (req, res) => {
//     const id = req.params.id;
//
//     User.update(req.body, {
//         where: {id: id}
//     }).then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "User was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating User with id=" + id
//             });
//         });
// };

module.exports.delete = async (req, res) => {
    try {
        await User.destroy({_id: req.params.id})
        res.status(200).json({
            message: 'Пользователь был удален.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};
