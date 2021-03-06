const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject) => {
        if(candidatePassword!== user.password){
            return reject(" password does not match ")
        } else {
            return resolve(true);
        }
    })
};

mongoose.model('User',userSchema);