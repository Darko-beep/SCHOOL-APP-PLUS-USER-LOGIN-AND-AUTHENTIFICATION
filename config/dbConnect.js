// mogoose
const mongoose = require('mongoose')

//DbConnect function to handle  database request
const dbConnect =  async() =>{
    try{
        await mongoose.connect('mongodb+srv://darkofrederick98:VA8NNGzFxAlSTq1V@lms.suboxkc.mongodb.net/?retryWrites=true&w=majority&appName=lms');
        console.log("DATABSE CONNECTED SUCCESSFULLY");

    }catch (error){
        console.log("DATABASE CONNECTION FAILED", error.message);
    }
};


dbConnect();

