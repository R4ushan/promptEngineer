import React from 'react';
import { Goal } from '../types';
import { goals } from '../data/goals';
import { ArrowLeft } from 'lucide-react';

interface GoalSelectProps {
  onSelect: (goal: Goal) => void;
  onBack: () => void;
}

export const GoalSelect: React.FC<GoalSelectProps> = ({ onSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-rizz flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <button
          onClick={onBack}
          className="mb-4 text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            What's Your Goal?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Choose what you're trying to achieve
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => onSelect(goal.id)}
                className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-6 text-left transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{goal.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

