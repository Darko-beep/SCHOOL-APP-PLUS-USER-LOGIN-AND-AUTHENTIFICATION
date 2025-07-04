
//express 
const express = require('express');
//morgan
const morgan = require('morgan');

// create an instance of express
const app = express();

//create a port 
const PORT = process.env.PORT || 2020;


//server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //console out the app
// console.log(app);
