import React from 'react';
import { motion } from 'framer-motion';
import tenkunCorrect from '../image/tenkun_pointing (3).png';
import tenkunWrong from '../image/tenkun_pointing (5).png';

const FeedbackMessage = ({ isCorrect, explanation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`mt-6 p-6 rounded-xl shadow-md ${
        isCorrect
          ? 'bg-green-50 border-2 border-green-200'
          : 'bg-red-50 border-2 border-red-200'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className={`flex items-start gap-4 ${!isCorrect ? 'flex-row-reverse' : ''}`}>
        <div className="flex-shrink-0">
          <img 
            src={isCorrect ? tenkunCorrect : tenkunWrong}
            alt={isCorrect ? "Tenkun celebrating correct answer" : "Tenkun pointing at mistake"}
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-2 ${
            isCorrect ? 'text-green-700' : 'text-red-700'
          }`}>
            {isCorrect ? '🎉 Correct!' : '❌ Incorrect!'}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackMessage;
