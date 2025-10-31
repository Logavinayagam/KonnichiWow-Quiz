import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ 
  question, 
  options, 
  selectedAnswer, 
  correctAnswer, 
  onAnswerSelect, 
  isAnswered,
  questionNumber 
}) => {
  const getOptionClassName = (option) => {
    const baseClasses = "w-full text-left p-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30";
    
    if (!isAnswered) {
      return `${baseClasses} ${
        selectedAnswer === option
          ? 'border-white bg-white text-primary font-semibold'
          : 'border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20'
      }`;
    }
    
    // After answering
    if (option === correctAnswer) {
      return `${baseClasses} border-green-400 bg-green-500 text-white font-semibold`;
    }
    
    if (option === selectedAnswer && option !== correctAnswer) {
      return `${baseClasses} border-red-400 bg-red-500 text-white`;
    }
    
    return `${baseClasses} border-white/20 bg-white/10 text-white/60`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary rounded-2xl shadow-lg p-5 md:p-6 border-2 border-primary"
    >
      <h2 
        className="text-xl md:text-2xl font-bold text-white mb-4"
        aria-label={`Question ${questionNumber}: ${question}`}
      >
        {question}
      </h2>
      
      <div 
        className="space-y-2.5"
        role="radiogroup"
        aria-label="Answer options"
      >
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => !isAnswered && onAnswerSelect(option)}
            className={getOptionClassName(option)}
            disabled={isAnswered}
            whileHover={!isAnswered ? { scale: 1.02 } : {}}
            whileTap={!isAnswered ? { scale: 0.98 } : {}}
            role="radio"
            aria-checked={selectedAnswer === option}
            aria-label={`Option ${index + 1}: ${option}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isAnswered) {
                e.preventDefault();
                onAnswerSelect(option);
              }
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center font-semibold text-xs">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-left text-sm">{option}</span>
              {isAnswered && option === correctAnswer && (
                <span className="text-green-500 text-lg">✓</span>
              )}
              {isAnswered && option === selectedAnswer && option !== correctAnswer && (
                <span className="text-red-500 text-lg">✗</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
