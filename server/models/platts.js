const mongoose = require("mongoose");

let plattsSchema = new mongoose.Schema(
    {
        date: Date,
        gasoil_USDbbl: Number,
        mogas_USDbbL: Number,
        pulp_USDbbl: Number,
        FX10AM: Number,
        PWS: Number
    }
);

module.export = mongoose.Schema('platts', plattsSchema);