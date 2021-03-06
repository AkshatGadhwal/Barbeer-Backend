const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = mongoose.model('User');
const {jwtLola} = require("../componentPages/keys");

module.exports = (req,res,next) => {
    try{
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.send("{ no authHeader in the request }")
        }
        const token = authHeader.replace("Bearer ","");
        if(token == null){
            return res.send("no token in the authHeader")
        }
        jwt.verify(token,jwtLola, async (err,payload) => {
            if(err){
                return res.send("error occured in line 17");
            }
            const user =await User.findById(payload['userId']);
            req.user = user;
            next();
        })
    } catch (err) {
        return res.send(" error occured in line 25");
    }
}