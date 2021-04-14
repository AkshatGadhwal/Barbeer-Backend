const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    }
})


mongoose.model('Shop',shopSchema,'users');