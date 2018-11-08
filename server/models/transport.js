const mongoose = require('mongoose');

let transportSchema = new mongoose.Schema(
    {
        rail: Number,
        road: Number,
    }
);

module.export = mongoose.Schema('transport', transportSchema);