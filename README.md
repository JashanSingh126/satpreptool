# satpreptool
A SAT Prep Question Tool for students aspiring to study the SAT in fun, practical way. 

Current Database: 
```
//schema is registered under MongoDB 
A line in the xy-plane passes (3,4) and has a slope of 2/7. Which of the following points lies on the line?
A) (0,0)

B) (-11,0)

C) (10,6)

D) (8,7)

A function satisfies f(2) = 3 and f(5) = 7. A function g satisfies g(3) = 2 and g(7) = 6. What is the value of f(g)))?
A) 2

B) 6

C) 3

D) 8

A certain grocery store displays 15 pumpkin pies and 20 cinnomon swirl cakes. What is the ratio of pumpkin pies to cinnamon swirl cakes at the grocery store?
A) 3:4

B) 4:3

C) 15:20

D) 20:5
```

To pull the Database:
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
