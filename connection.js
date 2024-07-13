// importing mongoose
var mongoose = require('mongoose');

// connecting with db
// mongoose.connect("connection string").then().catch() 
mongoose.connect("url to connect") //write a database name1 btw / and ?
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err);
});
