import React from 'react'


export default function Navigation() {
    const logo = require('../images/jsingh.png');
    return (
        <div>
          <nav className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="pt-2 mt-4 ml-6">
                        <img src={logo} alt=""/>
                    </div>
    
                    <div className="hidden md:flex space-x-12 pt-8 items-center">
                        <a  href="" className="hover:bg-blue-300 font-myCabin text-white text-[20px]  px-10 py-1 bg-myBlue text-center rounded-[10px]">Go Prep</a>
    
                    </div>
                </div>
            </nav>
        </div>
      )
}
