import React from "react";
import { FaUsers, FaChartLine, FaHeadset } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-16 sm:pt-[200px] relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-pink-600 to-purple-500 to-blue-400 bg-clip-text text-transparent">
            Markiva
          </span>
          <br />
          That Drives Results
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
          We help businesses grow with cutting-edge digital marketing strategies,
          creative design, and powerful web development solutions.
        </p>

        <div className="mt-6 sm:mt-8">
          <button
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold 
                   bg-gradient-to-r from-pink-500 to-purple-600 
                   hover:scale-105 hover:shadow-[0_8px_20px_rgba(236,72,153,0.2),0_12px_30px_rgba(147,51,234,0.2)] 
                   transition duration-300"
          >
            Explore Services →
          </button>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          <div className="p-6 rounded-2xl border border-white/10 
                        bg-white/10 backdrop-blur-md 
                        hover:bg-gradient-to-r hover:from-pink-600/90 hover:via-purple-500/90 hover:to-blue-400/90 
                        hover:scale-105 transition-all duration-500 group">
            <FaUsers className="text-white text-3xl sm:text-4xl mx-auto mb-4 transition-colors duration-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400">
              500+
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">Happy Clients</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 
                        bg-white/10 backdrop-blur-md 
                        hover:bg-gradient-to-r hover:from-pink-600/90 hover:via-purple-500/90 hover:to-blue-400/90 
                        hover:scale-105 transition-all duration-500 group">
            <FaChartLine className="text-white text-3xl sm:text-4xl mx-auto mb-4 transition-colors duration-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400">
              98%
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">Success Rate</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 
                        bg-white/10 backdrop-blur-md 
                        hover:bg-gradient-to-r hover:from-pink-600/90 hover:via-purple-500/90 hover:to-blue-400/90 
                        hover:scale-105 transition-all duration-500 group">
            <FaHeadset className="text-white text-3xl sm:text-4xl mx-auto mb-4 transition-colors duration-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400">
              24/7
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
