const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use (express.json()); // Parse JSON bodies


app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

let user = {
  name: "John Does",
  isAdmin: false,
  isLogin: true,
};

const isLogin = (req, res, next) => {
  if (user.isLogin) {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized, you are not admin",
    });
  }
};

app.use(isLogin, isAdmin);



//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

module.exports = app;
