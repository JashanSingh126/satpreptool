# satpreptool
A SAT Prep Question Tool for students aspiring to study the SAT in fun, practical way using React, MongoDB, Express, and Node.js

Current Database: 
```
//current questions 
1. A line in the xy-plane passes (3,4) and has a slope of 2/7. Which of the following points lies on the line?
2. A function satisfies f(2) = 3 and f(5) = 7. A function g satisfies g(3) = 2 and g(7) = 6. What is the value of f(g)))?
3. A certain grocery store displays 15 pumpkin pies and 20 cinnomon swirl cakes. What is the ratio of pumpkin pies to cinnamon swirl cakes at the grocery store?
4. A= 4πr^2 + 4πrh The surface area, A, of a cylinder of radius, r, and height, h can be found with the equation above. Which of the following correctly shows the cylinders height in terms of it’s radius and surface area?
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
