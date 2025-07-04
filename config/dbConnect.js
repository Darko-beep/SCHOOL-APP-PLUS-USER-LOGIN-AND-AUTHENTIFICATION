// mogoose
const mongoose = require('mongoose')

//DbConnect function to handle  database request
const dbConnect =  async() =>{
    try{
        await mongoose.connect('mongodb+srv://darkofrederick98:VA8NNGzFxAlSTq1V@lms.suboxkc.mongodb.net/lms?retryWrites=true&w=majority&appName=lms');
        console.log("DATABASE CONNECTED SUCESSFULLY");

    }catch (error){
        console.log("DATABASE CONNECTION FAILED", error.message);

    }
};
//mongodb+srv://darkofrederick98:<db_password>@lms.suboxkc.mongodb.net/

dbConnect();

