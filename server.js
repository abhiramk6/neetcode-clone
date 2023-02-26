const express = require("express"); //import package 
const dotenv= require("dotenv");
const mongoose = require("mongoose");

dotenv.config() //tells server that there is a .env file read it 

const app = express(); // create a express app

app.use(express.static("frontend")) // telling our app to use the frontend directory for static files

app.get('/html', function (req, res) { // on giving path as '/html' in url this will be executed 

    // __dirname will give location of current file

    res.sendFile(__dirname+"/frontend/index.html"); // it gives root path we will add location to file SimpleHtml which will run 

    // res.send will send string response 
    // res.sendFile will send file from given location as response which will run
    
})

app.get("/",function(req,res){  // on giving path as '/' in url this will be executed 
    res.send("Hello World!");
})

app.get("/myname",function(req,res){  // on giving path as '/myname' your name will be shown 
    res.send("Abhiram kamini");
})

/* 
app.listen(3000,function(){     //using the port number 3000 we will run our server 
    console.log("Server running on http://localhost:3000")  // command to display when our server is running 
}); 
*/

// comand line we will type 'npm start' to start server 
// after every change restart server 

mongoose.set('strictQuery', true); // in normal cases strict cases are false 

mongoose.connect(process.env.MONGO_CONNECTION_STRING,function(err){ //we take tyhe mongdb connection strning from env variables and useit to connect to db
    if(err){
        console.log(err);   // this will be thrown when there is a error 
    }
    else{
        console.log("DB Connected Successfully"); // this will run when db is successful

        app.listen(3000,function(){     //using the port number 3000 we will run our server 
            console.log("Server running on http://localhost:3000")  // command to display when our server is running 
        });
    }
})





