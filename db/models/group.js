// Collection structure
const {SchemaTypes} = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;

const groupSchema = new Schema({
    'name':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
    'members':{type:SchemaTypes.Array}
})

const GroupModel = connection.model('groups', groupSchema);
module.exports = GroupModel;