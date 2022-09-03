// Collection structure
const {SchemaTypes} = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;

const ledgerSchema = new Schema({
    'payer':{type:SchemaTypes.String, required:true},
    'payment':{type:SchemaTypes.Number, required:true},
    'description':{type:SchemaTypes.String}
    
}, {collection:'ledger'} )

const LedgerModel = connection.model('ledger', ledgerSchema);
module.exports = LedgerModel;