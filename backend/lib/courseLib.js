const courseModel = require('../models/courseModel'); // import our written code

module.exports.getAllCourse = async function(){
    return await courseModel.find({}); //this will give all thecourses as nothing is passed inside 
    // return await courseModel.find({course:"DSA"});   this will give all courses where course name is DSA
}

// things which are independent of js which might take time to complete there we use async and await

module.exports.createFirstCourse =async function(){

    const courses = await courseModel.find({});

    if (courses && courses.length >= 1){ // if first course is aldredy there we will not create anything so stop function
        return;
    }

    const firstCourseInput ={   //creating a course with given inputs 
        "title" : "Bz DSA",
        "level" : "easy"
    };

    const course = new courseModel(firstCourseInput); // passing new course to the course table
    await course.save(); // saving into db the new course 
    
}

module.exports.createCourse =async function(courseInput){
    const course = new courseModel(courseInput); //pass courseInput obj and add it to table 
    await course.save(); // saving into db the new course
    
}

module.exports.updateCourse = async function(courseId , UpdateInput){
    await courseModel.findOneAndUpdate({_id:courseId},UpdateInput);
}

