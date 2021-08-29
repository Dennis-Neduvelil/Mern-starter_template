//action:reset password
//metohd:get
//api:
const reset_password_get = (req,res)=>{
    console.log("reset password")
}

//--------------------------------------------------------------------------------------------------------

//action:reset password
//metohd:post
//api:
const reset_password_post = (req,res)=>{
    console.log("rp post")
}

//--------------------------------------------------------------------------------------------------------

//action:new password
//metohd:get
//api:
const new_password_get = (req,res)=>{
    console.log("new pas get")
}

//--------------------------------------------------------------------------------------------------------

//action:new password
//metohd:post
//api:
const new_password_post = (req,res)=>{
    console.log("new pas post")
}

//--------------------------------------------------------------------------------------------------------

//export

module.exports={
    reset_password_get,
    reset_password_post,
    new_password_get,
    new_password_post,
}