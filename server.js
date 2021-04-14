require("./models/User");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
const PORT = "3000";
const hostname = "192.168.43.190";
const {mongoURL} = require("./componentPages/keys");
const routesAuth = require('./routes/auth');


server.use(bodyParser.json());
server.use(routesAuth);

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})       
    
mongoose.connection.on('connected', async ()=>{
    console.log("connected to mongo yeahh");
})
mongoose.connection.on('open', function(){
    mongoose.connection.db.listCollections(function(error, names) {
      if (error) {
        throw new Error(error);
      } else {
        names.map(function(name) {
          console.log('found collection %s', name);
        });
      }
    });
  });

mongoose.connection.on('error',(err)=>{
console.log("this is error",err)
})




server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});