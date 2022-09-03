const mongoose = require('mongoose');
const URL = 'mongodb+srv://vaibhav:cooL123@cluster0.xtdfkmp.mongodb.net/billsplitterdb?retryWrites=true&w=majority';

mongoose.connect(URL, {maxPoolSize:5}, (err) => {
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});

module.exports = mongoose;
