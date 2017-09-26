const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/apiv1',function(req,res){
    console.log(req.query);
});


app.listen(3000,function(){
    console.log("running server at port 3000");
});


