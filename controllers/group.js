const messages = require('../utils/locale/en');
const repo = require('../db/repository/groupOperations');

module.exports = {

    async create(request, response){
        const groupObject = request.body;
        console.log('group is ', groupObject);
        // response.json({message:'succeed1!'});
        
        const result = await repo.add(groupObject);
        if(result && result.name){
            response.json({message:'Group successfully created '});
        }
        else{
            response.json({message:'Problem in group creation'});
        }

    },

    deleteGroup(request, response){
        const groupObject = request.body;
        const name = request.params['name'];
        console.log('group object is ', groupObject);
        console.log('name is ', name);
        // response.json({message:'succeed2!'});

        repo.remove(groupObject, response);

    },

    update(request, response){
        const groupObject = request.body;
        const name = request.params['name'];
        console.log('group is ', groupObject);
        console.log('name is ', name);
        // response.json({message:'succeed3!'});

        repo.update(groupObject, response);

    },

    data(request, response){
        const groupObject = request.body;
        const name = request.params['name'];
        console.log('name is ', name);
        console.log('group object is ', groupObject);
        // response.json({message:'succeed4!'});

        repo.find(groupObject, response);
    }
}