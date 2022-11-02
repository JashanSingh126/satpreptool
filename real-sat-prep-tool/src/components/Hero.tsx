import React from 'react'

export default function Hero() {
  const foreground = require('../images/foreground.png');
  const sat_img = require('../images/sat.png');

  return (
    <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row 
            items-center px-7 mx-auto mt-10 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-32 ml-20 space-y-10 md:w-1/2 mt-[40px]">
                    <div className = "w-32 h-2.5 bg-og"></div>

                    <h1 className="max-w-md text-[42px] font-plusJakarta font-bold text-myBlue text-center whitespace-nowrap">
                        SAT <span className="text-myGray">Question</span> Tool <span className="text-myGray">(SQT)</span> 
                    </h1>
                    <p className="font-myCabin text-text font-semibold text-[18px] w-[640px]">
                       Every student likely wonders in their lifetime if they will be able to do well on the SAT; well, I did too. Instead of putting our faith entirely in fate, a little practice never hurt anyone, so I thought this tool would be a great idea to put SAT questions at the forefront for students. Enjoy!
                    </p>
                    <div className="flex flex-row space-x-12 items-center relative">
                        <a href="" className="hover:bg-blue-300 font-myCabin text-white text-[20px]  px-10 py-1 bg-myBlue text-center rounded-[10px]">Let's Do It.</a>
        
                        <div className="absolute top-[0px] left-[-35px] w-[120px] h-[50px] rounded-full bg-og z-[-2] blur-[20px] "></div>
                    </div>
                </div>
                
                <div className = "relative mb-[1px] ml-[120px] z-20">
                    <img src={sat_img} className="z-100" alt=""/>
                    <div className="absolute top-[10px] left-[-25px] w-[500px] h-[500px] rounded-full bg-og z-[-1] "></div> 
                    <div className="absolute top-[200px] left-[260px] w-[300px] h-[300px] rounded-full bg-og z-[-2] blur-[80px] "></div>                                
                </div>
            </div>

            <div className="absolute bottom-[0px] left-[20px] scale-x-125 container mx-auto">
                <img className="" src={foreground} alt=""/>
            </div>

        </section>
  )
}
