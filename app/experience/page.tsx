"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const Experience = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-20 mt-40 z-[20]">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042F88B] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">
              Professional Journey
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Experience
              </span>{" "}
            </span>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div
            variants={slideInFromLeft(1.0)}
            className="text-center mb-8"
          >
            <p className="cursive text-[28px] font-medium text-center text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              &ldquo;Engineering is not just about solving problems; it&apos;s about creating possibilities and turning innovative ideas into reality that transforms the world.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col items-center justify-center px-20 mt-20 z-[20]">
        <div className="w-full max-w-6xl">
          {/* Software Engineer - Wipro */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="mb-16 relative"
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">Software Engineer</h2>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">Wipro Limited</h3>
                  <p className="text-cyan-400 font-medium mb-4">May 2022 - November 2023</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">AI Data Pipeline Architecture:</span> Built and executed a scalable AI data pipeline with Python, LangGraph, and DAGs that processes over 2.6 million records in under 45 minutes, automating analytics workflows and delivering $1.2 million in annual cost savings through reduced manual processing.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">LLM Backend Microservices:</span> Engineered sophisticated backend microservices for LLM prompt validation and intelligent routing using Python and AWS Lambda, achieving 36% reduction in debugging time while significantly improving output accuracy across GenAI applications.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">React Component Library:</span> Designed and integrated 18+ reusable React components to streamline LLM tool interfaces, reducing UI development time by 33% and establishing consistent design patterns across developer-facing applications.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">CI/CD Optimization:</span> Enhanced and maintained robust CI/CD workflows using GitHub Actions and AWS, accelerating deployment velocity while reducing regression-related rollbacks through comprehensive automated test coverage.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Performance Debugging:</span> Diagnosed and resolved critical software defects and performance regressions using Polars and proprietary debugging frameworks, achieving 63% reduction in escalations and preserving a key client relationship worth $1.2M annually.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm border border-purple-500/40">Python</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-500/40">LangGraph</span>
                    <span className="px-3 py-1 bg-cyan-600/30 text-cyan-200 rounded-full text-sm border border-cyan-500/40">AWS Lambda</span>
                    <span className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm border border-green-500/40">React</span>
                    <span className="px-3 py-1 bg-orange-600/30 text-orange-200 rounded-full text-sm border border-orange-500/40">GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Engineer - Zensar */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="mb-16 relative"
          >
            <div className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">Data Engineer</h2>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Zensar Technologies</h3>
                  <p className="text-purple-400 font-medium mb-4">October 2021 - April 2022</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Fraud Detection Engine:</span> Developed an advanced fraud detection system using PyTorch, NLP techniques, and SQL, deployed on AWS SageMaker. Achieved 67% reduction in false positives, delivering approximately $300,000 in annual savings through improved fraud prevention accuracy.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Multi-Agent Chatbot:</span> Built and fine-tuned an intelligent multi-agent chatbot using GPT-3 and LangChain for internal support automation. Reduced L1 ticket volume by 66% while maintaining consistent system uptime and improving user satisfaction.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Automated Testing Pipelines:</span> Programmed comprehensive regression test pipelines and automated model validation using MLflow and GitHub Actions, increasing test reliability by 53% and establishing robust quality assurance processes.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Performance Analytics:</span> Analyzed performance monitoring dashboards using SQL and PowerBI, identifying optimization opportunities and implementing data-driven solutions to improve system efficiency and user experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-cyan-600/30 text-cyan-200 rounded-full text-sm border border-cyan-500/40">PyTorch</span>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm border border-purple-500/40">NLP</span>
                    <span className="px-3 py-1 bg-orange-600/30 text-orange-200 rounded-full text-sm border border-orange-500/40">AWS SageMaker</span>
                    <span className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm border border-green-500/40">GPT-3</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-500/40">LangChain</span>
                    <span className="px-3 py-1 bg-red-600/30 text-red-200 rounded-full text-sm border border-red-500/40">MLflow</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements Section */}
          <motion.div
            variants={slideInFromTop}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-lg rounded-3xl p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$1.5M+</div>
                  <p className="text-gray-300">Annual Cost Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2.6M+</div>
                  <p className="text-gray-300">Records Processed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">67%</div>
                  <p className="text-gray-300">False Positive Reduction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[-20]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="./videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Experience;
