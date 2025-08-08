"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 relative z-[20] container-constraint"
    >
      <div className="w-full max-w-4xl mx-auto responsive-container">
        {/* About Me Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-8"
        >
          <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8" style={{ fontSize: '2rem' }}>
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Me
            </span>
          </h1>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-300 group-hover:animate-pulse"></div>
            
            {/* Profile image container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/MYProfile.jpg"
                alt="Shreyas Gosavi - Full Stack Developer"
                width={256}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority
                unoptimized
              />
              
              {/* Overlay gradient for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-center mb-8"
        >
          <h2 className="font-bold text-white mb-4" style={{ fontSize: '2.25rem' }}>
            Shreyas Gosavi
          </h2>
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" style={{ fontSize: '1.5rem' }}>
            Full Stack Developer & Machine Learning Engineer
          </h3>
        </motion.div>

        {/* Professional Description */}
        <motion.div
          variants={slideInFromLeft(1.0)}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-6 text-gray-300 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            <p>
              Versatile Full Stack Developer with 3+ years of comprehensive experience in building 
              end-to-end web applications and intelligent data-driven solutions. Proficient in modern 
              frontend technologies including React, Next.js, and TypeScript, combined with robust 
              backend development using Node.js, Python, and advanced AWS cloud architectures.
            </p>
            
            <p>
              Specialized in creating scalable full-stack applications that seamlessly integrate 
              data engineering, machine learning, and cloud engineering capabilities. Experienced in 
              developing responsive user interfaces, RESTful APIs, microservices architecture, and 
              real-time data processing pipelines. Expert in ML model deployment, MLOps workflows, 
              and building intelligent systems that leverage predictive analytics and automated 
              decision-making processes.
            </p>
            
            <p>
              Passionate about delivering complete digital solutions that bridge the gap between 
              user experience, data intelligence, and cloud-native scalability. Continuously exploring 
              emerging technologies in AI/ML, serverless computing, and distributed systems to create 
              innovative solutions that drive business growth and intelligent automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
