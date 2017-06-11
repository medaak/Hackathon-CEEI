import mongoose from 'mongoose';
import User from './account.js';

const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    adressLine: String,
    city: String,
    zipcode: String,
    covoiturage: Boolean,
    stepCities: [
        adressLine: String,
        city: String,
        zipcode: String
    ]
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

let model = mongoose.model('Service', serviceSchema);

export default class Service {

    findAll(req, res) {
        model.find({}, (err, services) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(services);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, service) => {
            if (err || !service) {
                res.sendStatus(403);
            } else {
                res.json(service);
            }
        });
    }

    findByUser(req, res) {
        var query = model.where({
            userId: req.params.id
        });
        query.find({}, (err, services) => {
            if (err || !services) {
                res.sendStatus(403);
            } else {
                res.json(services);
            }
        });
    }

    create(req, res) {
        model.create({
                title: req.body.title,
                description: req.body.description,
                adressLine: req.body.adressLine,
                city: req.body.city,
                zipcode: req.body.zipcode,
                stepCities: req.body.stepCities.slice(),
                userId: req.body.userId
            },
            (err, service) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(service);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            title: req.body.title,
            description: req.body.description,
            adressLine: req.body.adressLine,
            city: req.body.city,
            zipcode: req.body.zipcode
        }, (err, service) => {
            if (err || !service) {
                res.status(500).send(err.message);
            } else {
                res.json(service);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
