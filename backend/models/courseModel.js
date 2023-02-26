const mongoose = require('mongoose');  // import mongoose package 

const courseSchema = new mongoose.Schema(  // creating structure of schema 
    { "title": {type:String,unique:true,required:true},       //title of course is defined which will be String, constrains are telling title should be true and unique 
    "level":{type:String},
    "createdAt":{type:Date,default:Date.now}    //it will keep thedefault  value of date to data addition date

});
module.exports = mongoose.model("course",courseSchema); //creating table named course with the above schema 