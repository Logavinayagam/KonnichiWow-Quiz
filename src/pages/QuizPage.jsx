import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import FeedbackMessage from '../components/FeedbackMessage';
import Badge from '../components/Badge';
import questionsData from '../data/questions.json';
import logoName from '../image/konnichiwowlogonew.png';
import mascotLogo from '../image/logo.png';
import tenkunPeeping from '../image/tenkun_peeping_out_from_above.png';

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [startTime] = useState(Date.now());

  const currentQuestion = questionsData[currentQuestionIndex];
  const totalQuestions = questionsData.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  useEffect(() => {
    // Keyboard navigation
    const handleKeyPress = (e) => {
      // Enter to submit answer when not yet answered
      if (!isAnswered && e.key === 'Enter' && selectedAnswer) {
        e.preventDefault();
        handleSubmit();
        return;
      }
      
      // Enter or Arrow Right to go to next question after answering
      if (isAnswered && (e.key === 'Enter' || e.key === 'ArrowRight')) {
        e.preventDefault();
        handleNext();
        return;
      }
      
      // Number keys for selecting options
      if (!isAnswered && e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        if (optionIndex < currentQuestion.options.length) {
          handleAnswerSelect(currentQuestion.options[optionIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnswered, currentQuestionIndex, selectedAnswer]);

  const handleAnswerSelect = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isAnswered) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    setIsAnswered(true);

    // Update score
    if (isCorrect) {
      setScore(score + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }

      // Show badge for streak
      if (newStreak === 3 || newStreak === 5 || newStreak === 10) {
        setShowBadge(true);
        setTimeout(() => setShowBadge(false), 3000);
      }
    } else {
      setStreak(0);
    }

    // Save answer
    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation,
      },
    ]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Navigate to summary with results
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      navigate('/summary', {
        state: {
          score,
          totalQuestions,
          answers: [
            ...answers,
            {
              question: currentQuestion.question,
              selectedAnswer: selectedAnswer,
              correctAnswer: currentQuestion.answer,
              isCorrect: selectedAnswer === currentQuestion.answer,
              explanation: currentQuestion.explanation,
            },
          ],
          timeTaken,
          maxStreak,
        },
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  return (
    <div className="min-h-screen bg-accent">
      {/* Brand Header with Logo and Mascot */}
      <div className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-primary">
        <div className="max-w-6xl mx-auto py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoName} 
              alt="KonnichiWow Logo" 
              className="h-7 md:h-9 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold" style={{ color: '#EC265F' }}>QUIZ</span>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src={mascotLogo} 
              alt="Mascot" 
              className="h-8 md:h-10 object-contain animate-bounce"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-4 px-4">
        {/* Score Display at Top */}
        <div className="mb-4 flex justify-center items-end gap-4">
          <div className="bg-white rounded-xl shadow-md px-4 py-2 border-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">{score}</span>
              <span className="text-gray-600 text-xs">/ {totalQuestions}</span>
            </div>
            <div className="text-xs text-gray-500 text-center">Score</div>
          </div>
          
          {/* Tenkun Peeping Character */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex-shrink-0"
          >
            <img 
              src={tenkunPeeping} 
              alt="Tenkun Peeping" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md px-4 py-2 border-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">{streak}</span>
              <span className="text-lg">🔥</span>
            </div>
            <div className="text-xs text-gray-500 text-center">Streak</div>
          </div>
        </div>

        {/* Streak Badge */}
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex justify-center mb-3"
          >
            <Badge
              type="streak"
              text={`${streak} in a row! 🔥`}
            />
          </motion.div>
        )}

        {/* Desktop: Horizontal Layout when answered, Mobile: Vertical */}
        <div className={`grid grid-cols-1 gap-4 ${isAnswered ? 'lg:grid-cols-2' : ''}`}>
          {/* Question Panel */}
          <div className={!isAnswered ? 'max-w-4xl mx-auto w-full' : ''}>
        {/* Progress Bar */}
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          correctAnswer={currentQuestion.answer}
          onAnswerSelect={handleAnswerSelect}
          isAnswered={isAnswered}
          questionNumber={currentQuestionIndex + 1}
        />

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {!isAnswered ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`flex-1 py-3 px-6 rounded-xl font-bold text-base transition-all shadow-lg ${
                selectedAnswer
                  ? 'bg-white hover:bg-white/90 text-primary hover:shadow-xl'
                  : 'bg-white/30 text-white/50 cursor-not-allowed'
              }`}
              aria-label="Submit your answer"
            >
              Submit Answer
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="flex-1 bg-white hover:bg-white/90 text-primary py-3 px-6 rounded-xl font-bold text-base hover:shadow-xl transition-all shadow-lg"
              aria-label={isLastQuestion ? 'View results' : 'Go to next question'}
            >
              {isLastQuestion ? '📊 View Results' : 'Next Question →'}
            </motion.button>
          )}
        </div>
          </div>

        {/* Feedback Message - Shows on right side on desktop when answered */}
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
          <FeedbackMessage
            isCorrect={selectedAnswer === currentQuestion.answer}
            explanation={currentQuestion.explanation}
          />
          </motion.div>
        )}
        </div>

        {/* Keyboard Hints */}
        <div className="mt-4 text-center text-xs text-white/80">
          <p className="hidden md:block">
            💡 Tip: Use number keys (1-4) to select answers, Enter for next question
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
