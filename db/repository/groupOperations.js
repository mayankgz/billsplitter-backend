const GroupModel = require('../models/group');

module.exports = {

    add(groupObject){
        var promise = GroupModel.create(groupObject);
        return promise;
    },

    find(groupObject, response){
        GroupModel.findOne({name:groupObject.name, password:groupObject.password},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Welcome '+groupObject.name});
            }
            else{
                response.json({message:'Invalid Group name or Password'});
            }
        })
    },

    update(groupObject, response){
        GroupModel.findOneAndUpdate({name:groupObject.name, password:groupObject.password},{members:groupObject.members}, (err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Updated successfully '});
            }else{
                response.json({message:'Invalid Group name or Password'});
            }
        });
    },

    remove(groupObject, response){
        GroupModel.findOneAndDelete({name:groupObject.name, password:groupObject.password},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:groupObject.name + ' deleted'});
            }
            else{
                response.json({message:'Invalid Group Name or Password'});
            }
        })
    },

    changePassword(userObject, response){
        UserModel.findOneAndUpdate({userid:userObject.userid, password:userObject.password},{password:userObject.new_password}, (err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Password successfully changed '});
            }else{
                response.json({message:'Invalid Userid or Password'});
            }
        });
    }
}