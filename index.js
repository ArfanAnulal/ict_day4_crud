// 1.importing express
var express = require('express');
require('./connection');
var sampleModel = require('./model');

// 2.Initialization
app = express();

// middleware
app.use(express.json()) //data from front end comes in json format, this line converts it

// api
// to add data to db
app.post('/add',async(req,res)=>{ //async-await pair is used to make js asynchronous for this line
    try {
        await sampleModel(req.body).save();
        res.send('data added');
    } catch (error) {
        console.log(error);
        
    }
});

// api to view data
app.get('/view',async(req,res)=>{
    try {
        var output = await sampleModel.find();
        res.send(output);
    } catch (error) {
        console.log(error);
    }
})

// api to delete a document
app.delete('/remove/:b',async(req,res)=>{
    console.log(req.params.b)
    try{
        var id = req.params.b
        await sampleModel.findByIdAndDelete(id)
        res.send("data deleted")
    } catch(error) {
        console.log(error)
    }
})

// api to update
app.put('/update/:a',async(req,res)=>{
    try {
        var id = req.params.a
        var output = await sampleModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated", output})
    } catch (error) {
        console.log(error)
        
    }
})


// port assigning
app.listen('3000',()=>{
    console.log('Port is up and running!!!')
})