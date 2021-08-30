const db = require('../models');
const Event = db.events;
const minioService = require('../utils/minioService')
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
                //todo: find file from minio
                res.send(data)
            })
        res.status(200)
    } catch (e) {
        errorHandler(res, e)
    }
};


module.exports.create = async function(req, res) {

    /*todo: 1)add validation
    *       2)save file to minio
    *       3)const filename = minio.filename */

    // minioService.minioClient.putObject("images", req.file.originalname, req.file.buffer, function(error, etag) {
    //     if(error) {
    //         return console.log(error);
    //     }
    // });
    const event = {
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        imageSrc: req.file ? req.file.path : '', //originalNmae
        user: req.user.id
    };
    Event.create(event)
        .then(data => {
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

