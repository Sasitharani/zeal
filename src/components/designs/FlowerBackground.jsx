// HeroSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // For animations
import { useInView } from 'react-intersection-observer'; // For scroll detection

const HeroSection = () => {
  // Animation controls for the heading
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [controls, inView]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Organic Shape Background (Floating Element) */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>

      {/* Top-left flowers */}
      <div className="absolute top-0 left-0 w-40 h-40">
  
          <circle cx="30" cy="30" r="10" fill="url(#purpleGradient)" opacity="0.6" />
          <path d="M60 60 Q50 80, 40 100" stroke="#A68A64" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M40 55 Q35 70, 30 90" stroke="#A68A64" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M30 30 Q25 40, 20 60" stroke="#A68A64" strokeWidth="1" fill="none" opacity="0.5" />

            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9999', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFCCFF', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9966', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFCC99', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#CC99FF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E6CCFF', stopOpacity: 0.8 }} />
            </linearGradient>
    
      </div>

      {/* Bottom-right flowers */}
      <div className="absolute bottom-0 right-0 w-40 h-40">

          <circle cx="30" cy="30" r="10" fill="url(#purpleGradient)" opacity="0.6" />
          <path d="M60 60 Q70 40, 80 20" stroke="#A68A64" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M40 55 Q45 40, 50 20" stroke="#A68A64" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M30 30 Q35 20, 40 10" stroke="#A68A64" strokeWidth="1" fill="none" opacity="0.5" />
          <defs>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9999', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFCCFF', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9966', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFCC99', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#CC99FF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E6CCFF', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
     
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-5xl md:text-7xl font-bold text-gray-800 tracking-wide animate-pulse"
        >
          Welcome to a New Era
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-md">
          Discover a world of creativity and innovation with our cutting-edge designs.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#FF9966' }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;