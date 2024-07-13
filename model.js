// import mongoose
var mongoose = require('mongoose');

//schema creation
var schema = mongoose.Schema({
    sname:String,
    age:Number,
    place:String
})

// model creation
var crudModel = mongoose.model("sample",schema)

// Exporting
module.exports = crudModel