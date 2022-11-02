# satpreptool
A SAT Prep Question Tool for students aspiring to study the SAT in fun, practical way. 

Current Database: 


To pull the Databse:
```
//schema is registered under MongoDB 
const questionSchema = new mongoose.Schema({
    Question: String, 
    A: String, 
    B: String, 
    C: String, 
    D: String
});
```
