// Collection structure
const {SchemaTypes} = require('mongoose');
const connection = require('../connection');
const joi = require('joi');
const Schema = connection.Schema;

const groupSchema = new Schema({
    'name':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
    'members':{type:SchemaTypes.Array},
    'transactions':[{ type:SchemaTypes.ObjectId, ref:'ledger'}]
})

const validateGroup = (group) => {
    const schema = joi.object({
      name: joi.string().min(3).max(100).required(),
      password: joi.string().min(8).max(13).required(),
    })
    return schema.validate(group)
}

const GroupModel = connection.model('groups', groupSchema);
module.exports = {
    GroupModel,
    validateGroup,
}