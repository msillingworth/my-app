const mongoose = require("mongoose");
const inlandcosts = require('./inlandcosts');
const tax = require('./tax');
const platts = require('./platts');
const transport = require('./transport');
// const user = require('./models/user');

let customerSchema = mongoose.Schema(
    {
        customer: [
            {
             customerName: String,
             soldto: Number,
             price_proposal: [
                 {
                     createdDate: Date,                  // The date on which the pricing proposal was created
                     version: Number,                    // Version number of the pricing proposal
                     priceEffectivedDate: Date,          // Proposed start date of the contract
                     contractTerm: Number,               // Contract term in years
                     paymentTerms: String,               // Payment terms requested
                     pricingDateRange: String,           // Weekly or Monthly effect date ranges
                     excisePayable: Boolean,             // Is Fuel Excise payable?  True or False
                     businessUnit: String,               // Used to build the overheads component of price
                     shiptoElements: [
                         { 
                            shipto: Number,                 // Ship to Number from Salesforce
                             shiptoName: String,             // Delivery location number
                             gps: String,                    // Delivery location co-ordinates
                             productItemType: String,      // Product to be sold [Diesel, ULP, PULP]  
                             productItem: String,
                             item_number: Number,
                             supplyTerminal: String,
                             supplyDepot: String,
                             incumbentSupplier: String,
                             volume: Number,                 // Volume in litres
                             storage: Number,
                             safeFillLevel: Number,
                             inlandcosts,
                             platts,
                             tax,
                             transport,
                             temperatureAdjustmentFactor: Number,
                             exciseBenefit: Number,
                         }
                     ],
                     notes: String,
                     approvalStatus: Boolean,
                     approvalID: Number,
                 }
             ]
            } 
         ]
    }
);

module.exports = mongoose.Schema('Customer', customerSchema);