"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const SERVICES = [
  {
    title: "AI & Machine Learning Solutions",
    description: "Custom machine learning models and AI-powered applications that solve real business problems and drive revenue growth for startups and growing companies.",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    shadowColor: "shadow-purple-500/20",
    hoverShadow: "hover:shadow-purple-500/40",
  },
  {
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications built with React, Next.js, and Python that scale with your business and provide exceptional user experiences.",
    icon: "🚀",
    gradient: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    shadowColor: "shadow-blue-500/20",
    hoverShadow: "hover:shadow-blue-500/40",
  },
  {
    title: "Data Analytics & Insights",
    description: "Transform your business data into actionable insights with custom dashboards, reporting systems, and predictive analytics to drive informed decision-making.",
    icon: "📊",
    gradient: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    shadowColor: "shadow-green-500/20",
    hoverShadow: "hover:shadow-green-500/40",
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Scalable cloud infrastructure setup and deployment automation that reduces costs and improves reliability for growing businesses.",
    icon: "☁️",
    gradient: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    shadowColor: "shadow-orange-500/20",
    hoverShadow: "hover:shadow-orange-500/40",
  },
  {
    title: "API Development & Integration",
    description: "Robust REST APIs and third-party integrations that connect your systems, automate workflows, and streamline business operations.",
    icon: "⚡",
    gradient: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/30",
    shadowColor: "shadow-indigo-500/20",
    hoverShadow: "hover:shadow-indigo-500/40",
  },
  {
    title: "Business Process Automation",
    description: "Intelligent automation solutions that eliminate repetitive tasks, reduce operational costs, and free up your team to focus on strategic growth.",
    icon: "⚙️",
    gradient: "from-cyan-500 to-teal-500",
    borderColor: "border-cyan-500/30",
    shadowColor: "shadow-cyan-500/20",
    hoverShadow: "hover:shadow-cyan-500/40",
  },
];

export const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-[1000px] h-full flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div 
          variants={slideInFromTop}
          className="flex flex-col items-center justify-center mb-12 text-center"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
            Professional Services
          </h1>
          <h2 className="text-[25px] text-white font-bold mb-4">
            Growth-Focused Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-[800px]">
            Empowering businesses to achieve sustainable growth through innovative software engineering and machine learning solutions. Let&apos;s transform your ideas into impactful digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={index % 2 === 0 ? slideInFromLeft(0.5 + index * 0.1) : slideInFromRight(0.5 + index * 0.1)}
              className={`relative p-6 rounded-lg border-2 ${service.borderColor} bg-[#0300145a] backdrop-blur-sm ${service.shadowColor} ${service.hoverShadow} transition-all duration-300 hover:scale-105 group`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 text-center bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-300 w-0 group-hover:w-3/4`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
