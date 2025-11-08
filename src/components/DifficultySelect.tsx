import React from 'react';
import { Difficulty } from '../types';
import { ArrowLeft } from 'lucide-react';

interface DifficultySelectProps {
  onSelect: (difficulty: Difficulty) => void;
  onBack: () => void;
}

export const DifficultySelect: React.FC<DifficultySelectProps> = ({ onSelect, onBack }) => {
  const difficulties = [
    {
      id: 'easy' as Difficulty,
      title: 'Easy',
      description: 'Friendly and receptive. Perfect for beginners.',
      icon: '😊',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'medium' as Difficulty,
      title: 'Medium',
      description: 'Realistic responses. Requires some effort.',
      icon: '🤔',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'hard' as Difficulty,
      title: 'Hard',
      description: 'Challenging and critical. For experts only.',
      icon: '😤',
      color: 'from-red-500 to-red-600'
    }
  ];

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
            Choose Difficulty
          </h2>
          <p className="text-gray-600 text-center mb-8">
            How challenging should this be?
          </p>

          <div className="space-y-4">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => onSelect(difficulty.id)}
                className={`w-full bg-gradient-to-r ${difficulty.color} text-white font-bold py-6 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{difficulty.icon}</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{difficulty.title}</h3>
                    <p className="text-sm opacity-90">{difficulty.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

