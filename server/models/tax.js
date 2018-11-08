const mongoose = require('mongoose');

let taxSchema = new mongoose.Schema(
    {
        gst: Number,
        excise: [
            {
                effectivedate: Date,
                excise_amt: Number,
            }
           
        ]
    }
);

module.exports = mongoose.Schema('tax', taxSchema);