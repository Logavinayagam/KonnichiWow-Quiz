import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import logoName from '../image/konnichiwowlogonew.png';
import mascotLogo from '../image/logo.png';
import tenkunMeditating from '../image/tenkun_meditating.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#26ECB4] flex flex-col">
      {/* Brand Header with Logo */}
      <div className="bg-white shadow-lg py-3 px-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logoName} 
              alt="KonnichiWow Logo" 
              className="h-8 md:h-10 object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold" style={{ color: '#EC265F' }}>QUIZ</span>
          </div>
          <div className="flex items-center">
            <img 
              src={mascotLogo} 
              alt="KonnichiWow Mascot" 
              className="h-10 md:h-12 object-contain animate-bounce"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center px-4 py-4"
      >
        <div className="max-w-6xl w-full">
        {/* Mascot Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
          {/* Character Image on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="flex-shrink-0"
          >
            <img 
              src={tenkunMeditating} 
              alt="Tenkun Meditating" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 object-contain"
            />
          </motion.div>

          {/* Text Content on Right */}
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white"
            >
              Welcome to <span className="text-primary">KonnichiWow</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 font-normal"
            >
              Test your knowledge with our interactive quiz!
            </motion.p>
          </div>
        </div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-primary rounded-2xl shadow-xl p-6 md:p-8 border-2 border-primary max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Ready for the Challenge? 🎯
          </h3>
          
          <p className="text-white/90 text-base mb-4 text-center">
            Test your knowledge with 10 exciting questions covering web development, 
            JavaScript, React, and more. Get instant feedback and track your progress!
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/20 rounded-xl p-3 text-center border border-white/30">
              <div className="text-2xl font-bold text-white mb-1">10</div>
              <div className="text-xs text-white/80">Questions</div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 text-center border border-white/30">
              <div className="text-2xl font-bold text-white mb-1">4</div>
              <div className="text-xs text-white/80">Options</div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 text-center border border-white/30">
              <div className="text-2xl font-bold text-white mb-1">∞</div>
              <div className="text-xs text-white/80">Attempts</div>
            </div>
          </div>

          <Link to="/quiz">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-white/90 text-primary text-lg font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              aria-label="Start the quiz"
            >
              <FaPlay className="text-base" />
              Start Quiz Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer with Mascot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-white/80 text-xs mt-4"
        >
          <p className="flex items-center justify-center gap-2">
            <img 
              src={mascotLogo} 
              alt="Mascot" 
              className="w-6 h-6 object-contain"
            />
            Your friendly quiz companion is ready to help!
          </p>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
