const LedgerModel = require('../models/ledger');

module.exports = {

    add(ledgerObject){
        var promise = LedgerModel.create(ledgerObject);
        return promise;
    },

    remove(ledgerObject, response){
        LedgerModel.findOneAndDelete({description:ledgerObject.description},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:ledgerObject.description + ' removed'});
            }
            else{
                response.json({message:'Invalid Ledger Desc '});
            }
        })
    }
}