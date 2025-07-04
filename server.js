//http module 
const http = require('http');
//app import
const app = require('./app/app');
//require the daConnect file from the Config Folder
require ("./config/dbConnect");

//create a port 
const PORT = process.env.PORT || 2020;

// //morgan middleware for logging requests
// app.use(morgan('dev'));

// create an advanced server using http module
const server =http.createServer(app);


//server 
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //console out the app
// console.log(app);
