// mogoose
const mongoose = require('mongoose')

//DbConnect function to handle  database request
const dbConnect =  async() =>{
    try{
        await mongoose.connect('url')
        console.log("DATABSE CONNECTED SUCCESSFULLY");

    }catch (error){
        console.log("DATABASE CONNECTION FAILED", error.message);
    }
};


dbConnect();

