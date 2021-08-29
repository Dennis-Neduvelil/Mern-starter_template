//action:multifactor auth
//metohd:get
//api:
const mul_factor_auth_get = (req,res)=>{
    console.log("mf auth get")
}

//--------------------------------------------------------------------------------------------------------

//action:multifactor auth
//metohd:post
//api:
const mul_factor_auth_post = (req,res)=>{
    console.log("mf auth post")
}

//--------------------------------------------------------------------------------------------------------


//export

module.exports={
    mul_factor_auth_get,
    mul_factor_auth_post
}