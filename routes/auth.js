const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/User');
const Shop = mongoose.model('Shop');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const {jwtLola} = require('../componentPages/keys');
const tokenAuthenticating = require("../middleware/authToken")

router.get('/',tokenAuthenticating, (req,res) => {
    res.send(req.user.email);
});

router.get('/userData',tokenAuthenticating, (req,res) => {
    res.send(req.user);
})
router.get('/shopsData', async (req,res) => {
    const shops = await Shop.find();
    res.send(shops);
})

router.post("/signup",async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = new User({email,password});
        await user.save()
        const token = jwt.sign({userId : user._id},jwtLola);
        res.send({token});
    } catch (error) {
        return res.send("error occured in saving the data");
    }
});

router.post("/addShop",async (req,res) => {
    const {name,distance,rating,price} = req.body;
    try {

        await Shop.create({name:name,distance:distance,rating:rating, price:price}, function (err, small) {
            if (err) {
                console.log(err);
            };
        });

        return res.send("shop added successfully");
    
    } catch (error) {
        return res.send("error occured in saving the data");
    }
});


router.post("/signin",async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(402).send(" provide email and password ");
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(422).send({error:"must provide email or password"});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId : user._id},jwtLola);
        res.send({token});
    } catch (error) {
        return res.status(422).send({error:"email or password does not match"});
    }

});


module.exports = router;