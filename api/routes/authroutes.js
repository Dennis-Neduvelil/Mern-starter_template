//imports
const express = require("express");
const router = express.Router();


//import controls
const loginController = require("../contol/authcontrol/logincontrol");
const signupController = require("../contol/authcontrol/signupcontrol");
const resetController = require("../contol/authcontrol/resetpasscontrol");
const verifyController = require("../contol/authcontrol/verifycontrol");
const multifactController = require("../contol/authcontrol/multifactauth");

//routes

//login

router.get("/log-in",loginController.login_get);
router.post("/log-in",loginController.login_post);
router.get("/log-out",loginController.log_out_get);

//sign-up

router.get("/sign-up",signupController.sign_up_get);
router.post("/sign-up",signupController.sign_up_get);

//reset password

router.get("/reset-password",resetController.reset_password_get);
router.post("/reset-password",resetController.reset_password_post);

//new password

router.get("/new-password",resetController.new_password_get);
router.get("/new-password",resetController.reset_password_post);

//verify email and otp

router.get("/verify-email",verifyController.verify_email_get);
router.get("/verify-otp",verifyController.verify_otp_get);
router.post("/verify-otp",verifyController.verify_otp_post)

//multifactor authentication

router.get("/multifactor-auth",multifactController.mul_factor_auth_get);
router.post("/multifactor-auth",multifactController.mul_factor_auth_post);

//export
module.exports=router