"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const TransitionDemo = () => {
  const [currentStyle, setCurrentStyle] = useState("fade");

  const transitionStyles = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 }
    },
    space: {
      initial: { rotateX: -15, y: 50, opacity: 0 },
      animate: { rotateX: 0, y: 0, opacity: 1 },
      exit: { rotateX: 15, y: -50, opacity: 0 }
    }
  };

  return (
    <div className="p-8 bg-gray-900/50 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">Page Transition Demo</h3>
      
      <div className="flex gap-4 mb-6">
        {Object.keys(transitionStyles).map((style) => (
          <button
            key={style}
            onClick={() => setCurrentStyle(style)}
            className={`px-4 py-2 rounded-full capitalize transition-all ${
              currentStyle === style
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      <motion.div
        key={currentStyle}
        initial={transitionStyles[currentStyle as keyof typeof transitionStyles].initial}
        animate={transitionStyles[currentStyle as keyof typeof transitionStyles].animate}
        exit={transitionStyles[currentStyle as keyof typeof transitionStyles].exit}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <span className="text-white font-bold text-lg">
          {currentStyle.charAt(0).toUpperCase() + currentStyle.slice(1)} Transition
        </span>
      </motion.div>
    </div>
  );
};
