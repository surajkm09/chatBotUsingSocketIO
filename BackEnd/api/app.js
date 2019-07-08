var Express = require('express'); 
var app = Express() ; 


app.use((req,res)=>{

    console.log("Inside use ")  
});


module.exports = app 