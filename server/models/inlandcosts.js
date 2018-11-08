const mongoose = require('mongoose');

let inlandcostSchema = new mongoose.Schema(
    {
        wharfage: Number,
        pipeline: Number,
        terminalS_H: Number,
        depotS_H: Number,
        hostingFee: Number,
    }
);

module.export = mongoose.Schema('inlandcosts', inlandcostSchema);