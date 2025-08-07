"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink = ({ href, children, className = "" }: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={className}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`block ${isActive ? 'text-purple-400' : ''}`}
      >
        {children}
      </motion.span>
    </Link>
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
