const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');


const app = express(); 

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));


mongoose.connect('mongodb+srv://jashan:Jashan2348!@cluster0.h1qkse2.mongodb.net/satpreptool?retryWrites=true&w=majority');

const questionSchema = new mongoose.Schema({
    Question: String, 
    A: String, 
    B: String, 
    C: String, 
    D: String
});

const singleQuestion = mongoose.model("Question", questionSchema);

let fulldata; 

singleQuestion.find({}, function(err, data){
    fulldata = data
});


app.get('/', (req, res) => {
    singleQuestion.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

app.listen(3001, function() {
    console.log("server is running"); 
});