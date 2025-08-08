"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import { SkillText } from "@/components/sub/skill-text";
import { 
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiApachespark,
  SiApachekafka,
  SiRedis
} from "react-icons/si";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 container-constraint"
    >
      <div className="responsive-container w-full">
        <SkillText />

        {/* Atomic Skills Layout - Technologies Orbiting Python Like Electrons */}
        <div className="relative flex items-center justify-center min-h-[800px] w-full max-w-6xl mx-auto">
        
        {/* Orbital ring visuals with gradually increasing spacing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[22rem] h-[22rem] border border-purple-500/20 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[32rem] h-[32rem] border border-cyan-500/20 rounded-full animate-spin-slower"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[44rem] h-[44rem] border border-purple-300/10 rounded-full animate-spin-slowest"></div>
        </div>
        
        {/* Central Python - The Nucleus (No background) */}
        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="absolute z-20 flex flex-col items-center justify-center"
        >
          <SiPython className="text-6xl text-yellow-400" />
          <span className="text-sm text-white mt-2">Python</span>
        </motion.div>

        {/* Inner Orbit - Frontend Technologies (No backgrounds) */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="relative w-full h-full">
            {[
              { name: "React", icon: SiReact, color: "text-cyan-400", angle: 0 },
              { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", angle: 72 },
              { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", angle: 144 },
              { name: "Next.js", icon: SiNextdotjs, color: "text-white", angle: 216 },
              { name: "HTML/CSS", icon: SiReact, color: "text-orange-400", angle: 288 }
            ].map((skill, i) => {
              const radius = 140;
              const x = Math.cos((skill.angle * Math.PI) / 180) * radius;
              const y = Math.sin((skill.angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={skill.name}
                  variants={slideInFromLeft(0.7 + i * 0.1)}
                  className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  } as React.CSSProperties}
                >
                  <div className={`text-6xl ${skill.color}`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm text-white mt-2 text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Middle Orbit - Backend Technologies (No backgrounds) */}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="relative w-full h-full">
            {[
              { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", angle: 0 },
              { name: "MongoDB", icon: SiMongodb, color: "text-green-500", angle: 60 },
              { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", angle: 120 },
              { name: "Redis", icon: SiRedis, color: "text-red-500", angle: 180 },
              { name: "GraphQL", icon: SiReact, color: "text-pink-400", angle: 240 },
              { name: "Docker", icon: SiDocker, color: "text-blue-400", angle: 300 }
            ].map((skill, i) => {
              const radius = 260;
              const x = Math.cos((skill.angle * Math.PI) / 180) * radius;
              const y = Math.sin((skill.angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={skill.name}
                  variants={slideInFromLeft(0.9 + i * 0.1)}
                  className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  } as React.CSSProperties}
                >
                  <div className={`text-6xl ${skill.color}`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm text-white mt-2 text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Outer Orbit - Cloud & ML Technologies (No backgrounds) */}
        <div className="absolute inset-0 animate-spin-slowest">
          <div className="relative w-full h-full">
            {[
              { name: "AWS", icon: SiAmazon, color: "text-orange-400", angle: 0 },
              { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500", angle: 45 },
              { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", angle: 90 },
              { name: "Apache Spark", icon: SiApachespark, color: "text-orange-600", angle: 135 },
              { name: "Kafka", icon: SiApachekafka, color: "text-gray-400", angle: 180 },
              { name: "ML/AI", icon: SiTensorflow, color: "text-purple-400", angle: 225 },
              { name: "Data Eng", icon: SiApachespark, color: "text-cyan-400", angle: 270 },
              { name: "DevOps", icon: SiDocker, color: "text-blue-300", angle: 315 }
            ].map((skill, i) => {
              const radius = 350;
              const x = Math.cos((skill.angle * Math.PI) / 180) * radius;
              const y = Math.sin((skill.angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={skill.name}
                  variants={slideInFromLeft(1.1 + i * 0.1)}
                  className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  } as React.CSSProperties}
                >
                  <div className={`text-6xl ${skill.color}`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm text-white mt-2 text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
