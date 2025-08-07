"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 relative z-[20]"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* About Me Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-16"
        >
          <h1 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8">
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
          <div className="text-8xl">👨‍💻</div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Shreyas Gosavi
          </h2>
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Full Stack Developer & Machine Learning Engineer
          </h3>
        </motion.div>

        {/* Professional Description */}
        <motion.div
          variants={slideInFromLeft(1.0)}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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
