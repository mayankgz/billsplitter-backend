const messages = require('../utils/locale/en');
const repo = require('../db/repository/ledgerOperations');

module.exports = {

    async addTransaction(request, response){
        const ledgerObject = request.body;
        console.log('ledger object is ', ledgerObject);
        // response.json({message:'succeed1!'});
        
        const result = await repo.add(ledgerObject);
        if(result && result.description){
            response.json({message:'Transaction successfully added '});
        }
        else{
            response.json({message:'Problem in transaction addition'});
        }

    },

    removeTransaction(request, response){
        const ledgerObject = request.body;
        console.log('ledger object is ', ledgerObject);
        // response.json({message:'succeed2!'});

        repo.remove(ledgerObject, response);

    },

}