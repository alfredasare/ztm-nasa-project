const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    // target: {
    //     type: mongoose.ObjectId,
    //     ref: 'Planet'
    // }
    target: {
        type: String
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        required: true
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }
});

// connects launches schema with "launches" collection
// this is called compiling the model
module.exports = mongoose.model('Launch', launchesSchema);