"use client";

import { useEffect } from "react";

// Video sources for preloading
const PROJECT_VIDEOS = [
  "/videos/Ashtronut.webm",    // Most important - first project
  "/videos/Sun.webm",
  "/videos/earth.webm",
  "/videos/Moon.webm",
  "/videos/Mars.webm",
  "/videos/Blue Star.webm",
  "/videos/Star.webm",
];

export const VideoPreloader = () => {
  useEffect(() => {
    // Preload videos with priority (first video immediately, others progressively)
    const preloadVideo = (src: string, priority: number = 0) => {
      return new Promise<void>((resolve) => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;
        
        video.addEventListener('canplaythrough', () => {
          console.log(`✅ Preloaded: ${src}`);
          resolve();
        });
        
        video.addEventListener('error', () => {
          console.error(`❌ Failed to preload: ${src}`);
          resolve(); // Resolve anyway to not block other videos
        });

        // Set source after listeners to avoid race conditions
        setTimeout(() => {
          video.src = src;
          video.load();
        }, priority * 500); // Stagger loading: 0ms, 500ms, 1000ms, etc.
      });
    };

    // Start preloading immediately when app loads
    const startPreloading = async () => {
      console.log("🎬 Starting video preloading...");
      
      // Load first video immediately (highest priority)
      preloadVideo(PROJECT_VIDEOS[0], 0);
      
      // Load remaining videos with staggered timing to avoid overwhelming network
      PROJECT_VIDEOS.slice(1).forEach((video, index) => {
        preloadVideo(video, index + 1);
      });
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(startPreloading);
    } else {
      setTimeout(startPreloading, 100);
    }
  }, []);

  return null; // This component doesn't render anything
};

// Enhanced preloader with network detection
export const SmartVideoPreloader = () => {
  useEffect(() => {
    const checkNetworkAndPreload = async () => {
      // Check if user is on a fast connection
      const connection = (navigator as any).connection;
      const isFastConnection = !connection || 
        connection.effectiveType === '4g' || 
        connection.downlink > 2;

      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isFastConnection && !isReducedMotion) {
        // Preload all videos
        console.log("🚀 Fast connection detected, preloading all videos");
        PROJECT_VIDEOS.forEach((src, index) => {
          const video = document.createElement('video');
          video.preload = 'auto';
          video.muted = true;
          video.playsInline = true;
          video.src = src;
          video.load();
          
          // Store in global cache for faster access
          (window as any).__videoCache = (window as any).__videoCache || {};
          (window as any).__videoCache[src] = video;
        });
      } else {
        // Only preload first video on slow connections
        console.log("🐌 Slow connection detected, preloading first video only");
        const video = document.createElement('video');
        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;
        video.src = PROJECT_VIDEOS[0];
        video.load();
        
        (window as any).__videoCache = (window as any).__videoCache || {};
        (window as any).__videoCache[PROJECT_VIDEOS[0]] = video;
      }
    };

    checkNetworkAndPreload();
  }, []);

  return null;
};
