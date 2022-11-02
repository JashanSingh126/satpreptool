import { constants } from 'fs';
import React from 'react'
import {useState, useEffect} from "react";

let count = 0; 
let new_count = true; 
let s = "Click Next to Start"; 
export default function PrepTool() {
  

  const [questions, setQuestions] = useState([
    {
      Question: "", 
      A: "", 
      B: "", 
      C: "", 
      D: ""
    }
  ]);

  let [singleQuestion, setSingleQuestion] = useState(
    {
      Question: "", 
      A: "", 
      B: "", 
      C: "", 
      D: ""
    }
  );


  const intialLength: number = questions.length;

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then((jsonRes) => setQuestions(jsonRes));
  }, []);

  useEffect(() => {
    console.log("questions in use effect" + questions);
  }, [questions]);

  console.log("This is the 0th", questions[0])

  
  // s = "Click Next to Start"; 
   
 

  


  function handleNext(event: React.MouseEvent<HTMLButtonElement>) {
    
    if (count >= intialLength - 1){
      count = 0
    }
    else{
      count += 1
    }

    console.log("count:" + count + "initial Length Forward" + intialLength);

    console.log('You clicked next.' + count);

    s = "Keep Going!"; 

    setSingleQuestion(questions[count]);

    

    console.log("I am questions_ar:" + questions);

    
  }

  function handleBack(event: React.MouseEvent<HTMLButtonElement>) {
    if (count <= 0){
      count = 0
    }
    else{
      count -= 1
    }


    console.log("count:" + count + "inital Length Back" + intialLength);
    
    setSingleQuestion(questions[count]);

    console.log("I am questions_ar:" + questions);
    
  }

  


  return (
    <section id="Experience" className="mt-[10px] container mx-auto">
            <div className="w-[1478px] mx-auto h-[650px] bg-myLightBlue rounded-[86px] z[-1]">
                <div className="mt-[20px] container mx-auto flex flex-col items-center space-y-6">

                    <div className="flex flex-col items-center space-y-0 mt-[40px]">
                        <div className = "w-32 h-2.5 bg-myBlue"></div>
                        <p className="font-plusJakarta text-[30px] font-semibold text-black">{s}</p>
                    </div>

                    <div className="flex flex-col text-myGray text-[16px] font-Cabin space-y-6 relative top-[30px] px-16">
                       
                      <h1 className="font-sans font-semibold text-[22px]  text-black">{singleQuestion.Question}</h1>
                        <p className="font-sans text-[22px] hover:text-blue-500 text-black">{singleQuestion.A}</p>
                        <p className="font-sans text-[22px] hover:text-blue-500 text-black">{singleQuestion.B}</p>
                        <p className="font-sans text-[22px] hover:text-blue-500 text-black">{singleQuestion.C}</p>
                        <p className="font-sans text-[22px] hover:text-blue-500 text-black">{singleQuestion.D}</p>
        
          
                    </div>

                    <div className="flex flex-row space-x-12 relative ml-[720px] top-[100px]">
                      <button onClick = {handleBack} className="hover:bg-blue-300 font-myCabin text-white text-[20px]  px-12 py-2 bg-myBlue text-center rounded-[10px]">Back</button>
                      <button onClick = {handleNext} className="hover:bg-blue-300 font-myCabin text-white text-[20px]  px-12 py-2 bg-myBlue text-center rounded-[10px]">Next</button>
                    </div>

                </div>
            </div>
    </section>
  )
}
