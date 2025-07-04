require('dotenv').config();//dotenv for environment variables

const http = require('http');
require('./config/dbConnect'); // Import the database connection file

//app import
const app = require('./app/app');

//create a port 
const PORT = process.env.PORT || 2020;



// create an advanced server using http module
const server =http.createServer(app);

//server 
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //console out the app
// console.log(app);
