var jwt = require("jsonwebtoken");


const fetchuser = (req , res ,  next)=>{
    //  get the user from the jwt token and add id to req object
    next()
}

module.exports = fetchuser