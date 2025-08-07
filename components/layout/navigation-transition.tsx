"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink = ({ href, children, className = "" }: NavigationLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === href || isTransitioning) return;

    setIsTransitioning(true);

    // Add a small delay for smooth transition feel
    await new Promise(resolve => setTimeout(resolve, 100));
    
    router.push(href);
    
    // Reset transitioning state after navigation
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`${className} ${isTransitioning ? 'pointer-events-none' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        animate={{
          opacity: isTransitioning ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

// Loading indicator for page transitions
export const TransitionLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50"
  >
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full bg-white/20"
    />
  </motion.div>
);
