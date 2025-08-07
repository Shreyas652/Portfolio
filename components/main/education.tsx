"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 relative z-[20]"
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-20 z-[20]">
        {/* Education Title */}
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 mb-8"
        >
          Academic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Excellence
          </span>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          variants={slideInFromTop}
          className="text-center mb-12"
        >
          <p className="cursive text-[28px] font-medium text-center text-gray-300 max-w-[600px] mx-auto leading-relaxed">
            &ldquo;Excellence in education forms the foundation of innovative technology solutions.&rdquo;
          </p>
        </motion.div>

        {/* Education Information */}
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full">
          {/* Master's Degree */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="flex-1"
          >
            <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.02]">
              <h3 className="text-3xl font-bold text-white mb-3">
                Master of Science in Information Technology
              </h3>
              <p className="text-xl text-purple-300 mb-2 font-semibold">Arizona State University</p>
              <p className="text-cyan-400 font-medium mb-4">January 2024 - December 2025</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Advanced Coursework:</span> Software Engineering, Data Structures & Algorithms, Machine Learning, Cloud Computing, and Software Project Management.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Specialization:</span> Full-Stack Development, AI/ML Applications, and Enterprise Software Architecture.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full text-sm border border-green-500/40">
                  Currently Pursuing
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bachelor's Degree */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex-1"
          >
            <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/40 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-[1.02]">
              <h3 className="text-3xl font-bold text-white mb-2">
                Bachelor of Engineering
              </h3>
              <h4 className="text-2xl text-cyan-300 mb-3 font-semibold">
                Electronics and Telecommunication
              </h4>
              <p className="text-xl text-cyan-300 mb-2 font-semibold">Savitribai Phule Pune University</p>
              <p className="text-purple-400 font-medium mb-4">August 2018 - May 2022</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Core Studies:</span> Digital Signal Processing, Embedded Systems, Communication Networks, and Software Development.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Foundation:</span> Strong mathematical and engineering foundation enabling transition to software development and data science.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-500/40">
                  Graduated
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* My Journey Button */}
        <motion.div
          variants={slideInFromTop}
          className="mt-12"
        >
          <a
            href="/experience"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-white font-semibold text-lg mr-2">
              My Journey
            </span>
            <svg 
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
