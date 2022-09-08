// Collection structure
const {SchemaTypes} = require('mongoose');
const connection = require('../connection');
const joi = require('joi');
const Schema = connection.Schema;

const ledgerSchema = new Schema({
    'payer':{type:SchemaTypes.String, required:true},
    'payment':{type:SchemaTypes.Number, required:true},
    'description':{type:SchemaTypes.String},
    'group': {type:SchemaTypes.String, ref:'groups'}

}, {collection:'ledger'} )

const validateLedger = (ledger) => {
    const schema = joi.object({
      description: joi.string().min(3).max(1000).required(),
      payment: joi.number().min(1).required(),
      payer: joi.string().required(),
    })
    return schema.validate(ledger)
}

const LedgerModel = connection.model('ledger', ledgerSchema);
module.exports = {
    LedgerModel,
    validateLedger,
}