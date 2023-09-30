const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema({
    "id": {type: Number, required: true, unique: true},
    "firstname": {type: String, required: true},
    "lastname": {type: String, required: true},
    "desc": String,
    "status": String,
    "deadline": String,
    "phone": {type: String, required: true},
    "email": {type: String, required: true, unique: true}
});

module.exports = {providerSchema}