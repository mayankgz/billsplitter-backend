const GroupModel = require('../models/group');

module.exports = {

    add(groupObject, response){
        // var promise = GroupModel.create(groupObject);
        // return promise;

        GroupModel.create(groupObject, (err, doc) => {
            if(err){
                response.json({message:'Some DB Error  '});
            }else if(doc){
                response.json({message:'Group successfully created '});
            }else{
                response.json({message:'Error in group creation'});
            }
        })
    },

    find(groupObject, response){
        // GroupModel.findOne({name:groupObject.name, password:groupObject.password},(err, doc)=>{
        //     if(err){
        //         response.json({message:'Some DB Error  '});
        //     }
        //     else if(doc){
        //         response.json({message:'DataObject: ', doc});
        //     }
        //     else{
        //         response.json({message:'Invalid Group name or Password'});
        //     }
        // })

        GroupModel.findOne({name:groupObject.name, password:groupObject.password}).populate('transactions').exec((err, group) => {
            if(err){
                response.json({message:'Some DB Error  '});
            }else if(group){
                response.json({message:'Group Object: ', group});
                //console.log(group.transactions);
            }else{
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
    }
}