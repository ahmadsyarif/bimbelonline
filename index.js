const express = require('express');
const simulation = require('./server/simulation')
const app = express();

app.use(express.static('public'));
app.get('/apiv1',function(req,res){
    var mode = req.query.mode;
    var responseData ;
    switch(mode){
        case 'simulation':
            responseData = simulation.getResponse(req.query);
            break;
    }
    res.send(responseData);
    console.log(req.query);
    console.log(responseData);
});


app.listen(3000,function(){
    console.log("running server at port 3000");
});


