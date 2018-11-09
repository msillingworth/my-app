const mongoose = require("mongoose");

let plattsSchema = new mongoose.Schema(
    {
        date: Date,
        gasoil_USDbbl: Number,
        mogas_USDbbL: Number,
        pulp_USDbbl: Number,
        PWS: Number,
        worldScaleFlatVoyageBasis: String,
        i_l_percentage: Number,
        qualityPremiua: Number,
        locationPremia: Number,
        
        // Conversion factors
        FX10AM: Number,
        conversionBblToL: Number,
        density: Number,
        currency: String,

        // Calculated fields
        productCost_MOPS: Number,
        oceanFreight: Number,
        insurance_loss: Number,
        portSpecificWSF_USD_MT: Number,
        avgPWS: Number,
    }
);


module.export = mongoose.Schema('platts', plattsSchema);