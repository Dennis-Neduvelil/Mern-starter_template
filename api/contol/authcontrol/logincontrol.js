//action:login
//metohd:get
//api:
const login_get = (req,res)=>{
    res.json({key:"login get"})
}

//--------------------------------------------------------------------------------------------------------

//action:login
//metohd:post
//api:
const login_post = (req,res)=>{
    res.json({key:"login post"})
}

//--------------------------------------------------------------------------------------------------------

//action:logout
//metohd:get
//api:
const log_out_get = (req,res)=>{
    res.json({key:"logout get"})
}

//--------------------------------------------------------------------------------------------------------


//export

module.exports={
    login_get,
    login_post,
    log_out_get,
}