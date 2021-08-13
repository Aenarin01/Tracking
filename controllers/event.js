const db = require("../models");
const Event = db.events;
const errorHandler = require('../utils/errorHandler')

module.exports.getEvents = async function(req, res) {
    try {
        const events = await Event.findAll({})
        res.status(200).json(events)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function(req, res) {
    try {
        const events = await Event.findAll({
            where: {user: req.user.id}
        })
        res.status(200).json(events)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.findOneEvent = async function (req, res) {
    try {
         await Event.findByPk(req.params.id)
            .then(data => {
                res.send(data)
            })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
};


module.exports.create = async function(req, res) {
    const event = {
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        imageSrc: req.file ? req.file.path : '',
        user: req.user.id
    };

    Event.create(event)
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        });
}

module.exports.update = async function (req, res) {
    const id = req.params.id;
    try {
        const event = await Event.update({
            title: req.body.title,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            imageSrc: req.file ? req.file.path : ''
        }, {
            where: {id: id}
        })
        await Event.findByPk(req.params.id)
            .then(data=>{
                res.send(data)
            })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = (req, res) => {
    const id = req.params.id;
    Event.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Event with id=" + id
            });
        });
};

