"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/constants";

// Define video mapping for each project
const PROJECT_VIDEOS = [
  { name: "Astronaut", src: "./videos/Ashtronut.webm", type: "video/webm" },    // Project 1: AI Financial Coach
  { name: "Sun", src: "./videos/Sun.webm", type: "video/webm" },               // Project 2: Multi-Agent QA System
  { name: "Earth", src: "./videos/earth.webm", type: "video/webm" },           // Project 3: RockyBot
  { name: "Moon", src: "./videos/Moon.webm", type: "video/webm" },             // Project 4: Power BI Dashboard
  { name: "Mars", src: "./videos/Mars.webm", type: "video/webm" },             // Project 5: Darshan
  { name: "Blue Star", src: "./videos/Blue Star.webm", type: "video/webm" },   // Project 6: Enterprise Data Lake
  { name: "Star", src: "./videos/Star.webm", type: "video/webm" },             // Project 7: Real-Time Analytics
];

export const EarthProjects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(new Array(PROJECT_VIDEOS.length).fill(false));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const router = useRouter();
  const currentProject = PROJECTS[currentProjectIndex];

  // Preload all videos on component mount with optimization for cached videos
  useEffect(() => {
    const preloadVideos = async () => {
      PROJECT_VIDEOS.forEach((video, index) => {
        if (videoRefs.current[index]) {
          const videoElement = videoRefs.current[index];
          if (videoElement) {
            // Check if video is already cached from global preloader
            const cachedVideo = (window as any).__videoCache?.[video.src];
            if (cachedVideo) {
              console.log(`🚀 Using cached video: ${video.name}`);
              setVideosLoaded(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              // Copy cached video properties
              videoElement.src = cachedVideo.src;
              if (cachedVideo.readyState >= 3) { // HAVE_FUTURE_DATA
                videoElement.currentTime = 0;
                if (index === 0) {
                  videoElement.play().catch(console.error);
                }
              }
            } else {
              // Load video normally if not cached
              videoElement.load();
            }
            
            videoElement.addEventListener('canplaythrough', () => {
              setVideosLoaded(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            });
          }
        }
      });
    };

    preloadVideos();
  }, []);

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const selectProject = (index: number) => {
    if (index === currentProjectIndex) return;
    setCurrentProjectIndex(index);
    
    // Auto-play the new video when switching
    setTimeout(() => {
      const newVideo = videoRefs.current[index];
      if (newVideo && videosLoaded[index]) {
        newVideo.play().catch(console.error);
      }
    }, 100);
  };

  // Auto-play current video when index changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentProjectIndex];
    if (currentVideo && videosLoaded[currentProjectIndex]) {
      currentVideo.play().catch(console.error);
    }
  }, [currentProjectIndex, videosLoaded]);

  // Swipe handlers
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const swipeVelocityThreshold = 500;
    
    // Check if it's a significant swipe
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > swipeVelocityThreshold) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous project
        prevProject();
      } else {
        // Swiped left - go to next project
        nextProject();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextProject, prevProject]);

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Preloaded Video Backgrounds - All videos loaded but only current one visible */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {PROJECT_VIDEOS.map((video, index) => (
          <motion.div
            key={`video-container-${index}`}
            initial={false}
            animate={{ 
              opacity: index === currentProjectIndex ? 1 : 0,
              scale: index === currentProjectIndex ? 1 : 1.05
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              style={{ 
                display: index === currentProjectIndex ? 'block' : 'none'
              }}
              onError={(e) => {
                console.error(`${video.name} video error:`, e);
                const target = e.currentTarget;
                if (target && target.load) {
                  setTimeout(() => {
                    try {
                      target.load();
                    } catch (error) {
                      console.error("Failed to reload video:", error);
                    }
                  }, 2000);
                }
              }}
              onLoadStart={() => console.log(`🎬 Loading ${video.name} video...`)}
              onCanPlay={() => console.log(`✅ ${video.name} video ready`)}
              onPlay={() => console.log(`▶️ ${video.name} video playing`)}
            >
              <source src={video.src} type={video.type} />
              <source src="./videos/earth.webm" type="video/webm" />
            </video>
          </motion.div>
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-8 relative">
        {/* Left Swipe Area (Mobile) */}
        <div className="absolute left-0 top-0 w-16 h-full md:hidden flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity">
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 text-2xl"
          >
            ←
          </motion.div>
        </div>
        
        {/* Right Swipe Area (Mobile) */}
        <div className="absolute right-0 top-0 w-16 h-full md:hidden flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity">
          <motion.div
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 text-2xl"
          >
            →
          </motion.div>
        </div>

        <div className="max-w-6xl w-full">
          {/* Project Showcase with Transition Effect and Swipe Support */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center relative">
                {/* Project Info */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8 max-w-4xl"
                >
                  <div>
                    <h2 className="text-5xl font-bold text-white mb-6">
                      {currentProject.title}
                    </h2>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Technologies - Dynamic based on project */}
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Technology Focus</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {currentProjectIndex === 0 && (
                        <>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">Google Gemini AI</span>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">FastAPI</span>
                          <span className="px-4 py-2 bg-cyan-600/30 text-cyan-200 rounded-full border border-cyan-500/40">React 18</span>
                          <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/40">Machine Learning</span>
                        </>
                      )}
                      {currentProjectIndex === 1 && (
                        <>
                          <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full border border-orange-500/40">Computer Vision</span>
                          <span className="px-4 py-2 bg-red-600/30 text-red-200 rounded-full border border-red-500/40">YOLO/CNN</span>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">NLP</span>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">Speech Recognition</span>
                        </>
                      )}
                      {currentProjectIndex === 2 && (
                        <>
                          <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full border border-orange-500/40">Apache Spark</span>
                          <span className="px-4 py-2 bg-red-600/30 text-red-200 rounded-full border border-red-500/40">Kafka</span>
                          <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/40">ML Pipelines</span>
                          <span className="px-4 py-2 bg-cyan-600/30 text-cyan-200 rounded-full border border-cyan-500/40">Data Lake</span>
                        </>
                      )}
                      {currentProjectIndex === 3 && (
                        <>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">BERT</span>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">Transformers</span>
                          <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/40">Multi-Agent</span>
                          <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full border border-orange-500/40">NLP</span>
                        </>
                      )}
                      {currentProjectIndex === 4 && (
                        <>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">GPT-4</span>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">RAG</span>
                          <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/40">Vector DB</span>
                          <span className="px-4 py-2 bg-cyan-600/30 text-cyan-200 rounded-full border border-cyan-500/40">LLMs</span>
                        </>
                      )}
                      {currentProjectIndex === 5 && (
                        <>
                          <span className="px-4 py-2 bg-red-600/30 text-red-200 rounded-full border border-red-500/40">Apache Kafka</span>
                          <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full border border-orange-500/40">Spark Streaming</span>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">MLflow</span>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">Redis</span>
                        </>
                      )}
                      {currentProjectIndex === 6 && (
                        <>
                          <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full border border-blue-500/40">Power BI</span>
                          <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full border border-orange-500/40">R/Python</span>
                          <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full border border-green-500/40">ML Models</span>
                          <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/40">Risk Analytics</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {currentProject.link && (
                      // Hide button for Darshan (index 4), Enterprise Data Lake (index 5), and Real-Time ML (index 6)
                      currentProjectIndex !== 4 && currentProjectIndex !== 5 && currentProjectIndex !== 6 && (
                        <a
                          href={
                            // Use website link for AI Financial Coach on projects page, GitHub link is for main page only
                            currentProjectIndex === 0 
                              ? "https://ai-financial-coach-1.onrender.com/" 
                              : currentProject.link
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          {/* Custom button text based on new project order */}
                          {currentProjectIndex === 0 && "View Website"}
                          {currentProjectIndex === 1 && "View GitHub"}
                          {currentProjectIndex === 2 && "View GitHub"}
                          {currentProjectIndex === 3 && "View Dashboard"}
                        </a>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls with Swipe Support */}
          <div className="flex justify-center items-center mt-8 gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="w-14 h-14 bg-purple-600/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-purple-700/80 transition-all duration-300 shadow-lg shadow-purple-500/25 border border-purple-500/30"
            >
              ←
            </motion.button>

            {/* Project Indicators */}
            <div className="flex gap-2">
              {PROJECTS.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => selectProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="w-14 h-14 bg-purple-600/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-purple-700/80 transition-all duration-300 shadow-lg shadow-purple-500/25 border border-purple-500/30"
            >
              →
            </motion.button>
          </div>

          {/* Project Counter with Video Name */}
          <div className="text-center mt-6">
            <motion.p
              key={`counter-${currentProjectIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-300"
            >
              Project {currentProjectIndex + 1} of {PROJECTS.length} • {PROJECT_VIDEOS[currentProjectIndex].name} Background
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
