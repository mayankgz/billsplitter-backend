const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded());
//Dynamic Routing
app.use('/', require('./routes/group'));
app.use('/ledger', require('./routes/ledger'));

const server = app.listen(1000, (err) => {
    if(err){
        console.log('Server Crash ', err);
    }else{
        console.log('Server Start ', server.address);
    }
})