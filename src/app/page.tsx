import React from 'react'
import Link from 'next/link';

const page = () => {
   return (
        <div className="w-full h-auto  py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold text-white opacity-25 tracking-tight">
              Master the Art of Music
            </h1>
            <p className="mt-6 md:mt-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-center text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus corrupti commodi optio fugiat soluta dicta unde necessitatibus placeat eaque illum, nemo, quaerat atque natus. Veniam aut sint voluptate sapiente?
            </p>
            <div className="mt-8 md:mt-10 flex justify-center">
              <a 
                href="#" 
                className="inline-block bg-black border-4 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-indigo-700 transition-colors duration-300 ease-in-out shadow-md hover:border-y-teal-200 hover:shadow-lg"
              >
                Explore Courses
              </a>
            </div>
          </div>
          
        </div>
      );
}

export default page;