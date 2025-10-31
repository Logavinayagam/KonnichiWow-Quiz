import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Badge = ({ type, text }) => {
  const badges = {
    streak: {
      icon: FaStar,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-300'
    },
    perfect: {
      icon: FaTrophy,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-300'
    },
    great: {
      icon: FaMedal,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300'
    }
  };

  const badge = badges[type] || badges.streak;
  const Icon = badge.icon;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${badge.bgColor} ${badge.borderColor} ${badge.textColor}`}
    >
      <div className={`bg-gradient-to-br ${badge.color} p-2 rounded-full`}>
        <Icon className="text-white text-sm" />
      </div>
      <span className="font-semibold text-sm">{text}</span>
    </motion.div>
  );
};

export default Badge;
