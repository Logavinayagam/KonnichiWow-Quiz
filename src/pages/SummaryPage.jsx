import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTrophy, FaRedo, FaHome, FaClock, FaFire } from 'react-icons/fa';
import Badge from '../components/Badge';
import logoName from '../image/konnichiwowlogonew.png';
import mascotLogo from '../image/logo.png';
import tenkunPeeping from '../image/tenkun_peeping_out_from_above.png';

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get results from navigation state
  const { score, totalQuestions, answers, timeTaken, maxStreak } = location.state || {
    score: 0,
    totalQuestions: 0,
    answers: [],
    timeTaken: 0,
    maxStreak: 0,
  };

  // Redirect if no data
  if (!location.state) {
    navigate('/');
    return null;
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceMessage = () => {
    if (percentage === 100) return { text: "Perfect Score! 🎉", badge: "perfect" };
    if (percentage >= 80) return { text: "Excellent Work! 🌟", badge: "great" };
    if (percentage >= 60) return { text: "Good Job! 👍", badge: "great" };
    return { text: "Keep Practicing! 💪", badge: "streak" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#26ECB4' }}>
      {/* Brand Header with Logo and Mascot */}
      <div className="bg-white shadow-md border-b-4 border-primary">
        <div className="max-w-5xl mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoName} 
              alt="KonnichiWow Logo" 
              className="h-8 md:h-10 object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold" style={{ color: '#EC265F' }}>QUIZ</span>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src={mascotLogo} 
              alt="Mascot" 
              className="h-10 md:h-12 object-contain"
            />
            <span className="text-3xl">🎉</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-4 lg:h-[calc(100vh-6rem)] lg:flex lg:flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Quiz Complete!
          </h2>
          <p className="text-lg text-white">{performance.text}</p>
        </motion.div>

        {/* Main Content - Horizontal Layout on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 lg:flex-1 lg:overflow-hidden">
          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl shadow-xl p-6 md:p-8 border-2 border-primary/20 lg:h-full lg:flex lg:flex-col lg:overflow-hidden"
            style={{ backgroundColor: '#EC265F' }}
          >
          {/* Desktop: 3-column layout, Mobile: stacked */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-4">
            {/* Column 1: Tenkun, Score, Badge */}
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-3 shadow-xl"
                style={{ backgroundColor: '#26ECB4' }}
              >
                <img 
                  src={tenkunPeeping} 
                  alt="Tenkun celebrating" 
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {score}/{totalQuestions}
                </div>
                <div className="text-lg text-white mb-2">
                  {percentage}% Correct
                </div>
                <Badge type={performance.badge} text={performance.text} />
              </motion.div>
            </div>

            {/* Column 2: First 3 Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 mb-4 lg:mb-0">
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40" style={{ backgroundColor: '#26ECB4' }}>
                <FaTrophy className="text-2xl text-black flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{score}</div>
                  <div className="text-xs text-black">Correct</div>
                </div>
              </div>
              
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40" style={{ backgroundColor: '#26ECB4' }}>
                <div className="text-2xl flex-shrink-0">❌</div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{totalQuestions - score}</div>
                  <div className="text-xs text-black">Incorrect</div>
                </div>
              </div>
              
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40 col-span-2 lg:col-span-1" style={{ backgroundColor: '#26ECB4' }}>
                <FaClock className="text-2xl text-black flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{formatTime(timeTaken)}</div>
                  <div className="text-xs text-black">Time Taken</div>
                </div>
              </div>
            </div>

            {/* Column 3: Next 3 Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 mb-4 lg:mb-0">
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40" style={{ backgroundColor: '#26ECB4' }}>
                <FaFire className="text-2xl text-black flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{maxStreak}</div>
                  <div className="text-xs text-black">Best Streak</div>
                </div>
              </div>
              
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40" style={{ backgroundColor: '#26ECB4' }}>
                <div className="text-2xl flex-shrink-0">📊</div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{percentage}%</div>
                  <div className="text-xs text-black">Accuracy</div>
                </div>
              </div>
              
              <div className="rounded-lg p-2 flex items-center gap-3 border-2 border-white/40 col-span-2 lg:col-span-1" style={{ backgroundColor: '#26ECB4' }}>
                <div className="text-2xl flex-shrink-0">⚡</div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-black">{(timeTaken / totalQuestions).toFixed(1)}s</div>
                  <div className="text-xs text-black">Avg. Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Below the 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 lg:flex-shrink-0">
            <Link to="/quiz" className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-sm hover:shadow-xl transition-all shadow-lg flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold"
                style={{ color: '#26ECB4' }}
              >
                <FaRedo />
                Retake Quiz
              </motion.button>
            </Link>
            
            <Link to="/" className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-sm hover:shadow-xl transition-all shadow-lg flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold"
                style={{ color: '#EC265F' }}
              >
                <FaHome />
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>

          {/* Review Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-2xl shadow-xl border-2 border-primary/20 lg:h-full lg:flex lg:flex-col lg:overflow-hidden"
            style={{ backgroundColor: '#EC265F' }}
          >
            <h2 className="text-2xl font-bold text-white p-6 pb-4 flex items-center gap-2 lg:flex-shrink-0">
              <span>📝</span>
              Review Your Answers
            </h2>
            
            <div className="px-6 pb-6 space-y-4 lg:overflow-y-auto lg:flex-1">
            {answers.map((answer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className={`p-4 rounded-xl border-2 ${
                  answer.isCorrect
                    ? 'bg-white/10 border-green-400'
                    : 'bg-white/10 border-red-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    answer.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-2">
                      {answer.question}
                    </h3>
                    
                    <div className="space-y-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-sm">Your answer:</span>
                        <span className={`font-semibold text-sm ${
                          answer.isCorrect ? 'text-green-200' : 'text-red-200'
                        }`}>
                          {answer.selectedAnswer}
                          {answer.isCorrect ? ' ✓' : ' ✗'}
                        </span>
                      </div>
                      
                      {!answer.isCorrect && (
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Correct answer:</span>
                          <span className="font-semibold text-green-200 text-sm">
                            {answer.correctAnswer} ✓
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3 border border-white/30">
                      <p className="text-xs text-white">
                        <span className="font-semibold">Explanation: </span>
                        {answer.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-4 text-white"
        >
          <p className="text-sm">Thanks for playing! 🎮 Share your score and challenge your friends!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryPage;
