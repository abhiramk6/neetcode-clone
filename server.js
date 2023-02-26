const express = require("express"); //import package 

const app = express(); // create a express app

app.get("/",function(req,res){  // on giving path as '/' in url this will be executed 
    res.send("Hello World!");
})

app.get("/myname",function(req,res){  // on giving path as '/myname' your name will be shown 
    res.send("Abhiram kamini");
})

app.listen(3000,function(){     // giving 3000 port and function to run 
    console.log("Servewr running on http://localhost:3000")  //using the port number 3000 we will run our server 
});

// comand line we will type 'npm start' to start server 
// after every change restart server 

