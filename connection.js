// importing mongoose
var mongoose = require('mongoose');

// connecting with db
// mongoose.connect("connection string").then().catch() 
mongoose.connect("mongodb+srv://Arfan:arfan@cluster0.psoq6vh.mongodb.net/crudbatch2?retryWrites=true&w=majority&appName=Cluster0") //write a database name1 btw / and ?
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err);
});