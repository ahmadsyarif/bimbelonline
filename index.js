const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000,function(){
    console.log("running server at port 3000");
})
