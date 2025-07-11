const express = require("express");
//ADMIN MODEL IMPORT 
const Admin = require("../models/Staff/Admin");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");
// const  academicYearRouter = require("../routes/academics/academicYear");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require("../routes/academics/academicYear");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use (express.json()); // Parse JSON bodies




//Routes
//admin register
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);


//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
