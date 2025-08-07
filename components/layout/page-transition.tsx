"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

// Space-themed loading overlay
const LoadingOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-[#030014] flex items-center justify-center"
  >
    {/* Animated stars during transition */}
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-2 border-purple-500 border-t-transparent rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 w-12 h-12 border-2 border-cyan-500 border-b-transparent rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm"
      />
    </div>
  </motion.div>
);

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Advanced transition with space particles
export const SpacePageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  const spaceVariants = {
    initial: {
      opacity: 0,
      rotateX: -15,
      y: 50,
    },
    in: {
      opacity: 1,
      rotateX: 0,
      y: 0,
    },
    out: {
      opacity: 0,
      rotateX: 15,
      y: -50,
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={spaceVariants}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full perspective-1000"
        style={{ perspective: "1000px" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Route-specific transitions
export const RouteTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  const getTransition = () => {
    switch (pathname) {
      case "/":
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.1 },
        };
      case "/projects":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        };
      case "/experience":
        return {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const transition = getTransition();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={transition.initial}
        animate={transition.animate}
        exit={transition.exit}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
