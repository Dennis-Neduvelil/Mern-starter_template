//action:sign-up verify email
//metohd:get
//api:
const verify_email_get = (req,res)=>{
    console.log("ve get")
}

//--------------------------------------------------------------------------------------------------------

//action:sign-up verify otp
//metohd:get
//api:
const verify_otp_get = (req,res)=>{
    console.log("vo get")
}

//--------------------------------------------------------------------------------------------------------

//action:sign-up verify otp post
//metohd:get
//api:
const verify_otp_post = (req,res)=>{
    console.log("vo post")
}

//--------------------------------------------------------------------------------------------------------



//export

module.exports={
    verify_email_get,
    verify_otp_post,
    verify_otp_get
}