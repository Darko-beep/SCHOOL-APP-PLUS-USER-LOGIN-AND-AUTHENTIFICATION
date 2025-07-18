const express = require("express");
const app = require("../../app/app");
const Admin = require("../../models/Staff/Admin");
const {
  registerAdmCtrl,
  adminPublishResultsCtrl,
  adminSuspendTeacherCtrl,
  adminUnPublishResultsCtrl,
  adminUnSuspendTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminWithdrawTeacherCtrl,
  deleteAdminCtrl,
  getAdminProfileCtrl,
  getAdminsCtrl,
  loginAdminCtrl,
  updateAdminCtrl,
} = require("../../controller/staff/adminCtrl");
const isLogin= require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");
 // Importing isAdmin middleware to ensure admin access



const adminRouter = express.Router();

//register
adminRouter.post("/register", registerAdmCtrl);

//login
adminRouter.post("/login", loginAdminCtrl);

//get all
adminRouter.get("/",isLogin, getAdminsCtrl);

//single

adminRouter.get("/profile", isLogin,  isAdmin,  getAdminProfileCtrl);

//update
adminRouter.put("/",isLogin,isAdmin, updateAdminCtrl);

//delete
adminRouter.delete("/:id", deleteAdminCtrl);

//suspend
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

//unsuspend
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherCtrl);

//withdraw
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

//unwithdraw
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherCtrl);

//publish exams
adminRouter.put("/publish/exam/:id", adminPublishResultsCtrl);

//unpublish exams results
adminRouter.put("/unpublish/exam/:id", adminUnPublishResultsCtrl);

module.exports = adminRouter;
