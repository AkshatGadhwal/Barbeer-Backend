require("./models/User");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
const PORT = "3000";
const hostname = "localhost";
const {mongoURL} = require("./componentPages/keys");
const routesAuth = require('./routes/auth');


server.use(bodyParser.json());
server.use(routesAuth);

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})       
    
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
console.log("this is error",err)
})




server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});