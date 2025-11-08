import React from 'react';
import { XCircle, Home, RotateCcw } from 'lucide-react';
import { Persona, Goal } from '../types';

interface GameOverScreenProps {
  persona: Persona;
  goal: Goal;
  messageCount: number;
  onTryAgain: () => void;
  onHome: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  persona,
  goal,
  messageCount,
  onTryAgain,
  onHome
}) => {
  const goalMessages = {
    get_number: `You didn't get ${persona.name}'s number`,
    ask_date: `${persona.name} wasn't interested in a date`,
    be_funny: 'The conversation fell flat',
    make_friend: `${persona.name} didn't connect with you`
  };

  const encouragement = [
    "Don't worry, even the best have off days!",
    "Practice makes perfect. Try again!",
    "Every conversation is a learning opportunity!",
    "You'll get it next time!"
  ];

  const randomEncouragement = encouragement[Math.floor(Math.random() * encouragement.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-slideUp">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-4">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Game Over 💔
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            {goalMessages[goal]}
          </p>
          <p className="text-purple-600 font-semibold">
            {randomEncouragement}
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="text-4xl">{persona.avatar}</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">{persona.name}</h3>
                <p className="text-sm text-gray-600">{persona.description.split(' - ')[0]}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around text-center">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 flex-1 mx-1">
              <p className="text-3xl font-bold text-red-600">{messageCount}</p>
              <p className="text-sm text-gray-600">Messages</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 flex-1 mx-1">
              <p className="text-3xl font-bold text-pink-600">✗</p>
              <p className="text-sm text-gray-600">Goal Failed</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2">💡 Quick Tips</h4>
            <ul className="text-sm text-gray-700 text-left space-y-1">
              <li>• Be genuine and authentic</li>
              <li>• Ask open-ended questions</li>
              <li>• Show interest in their responses</li>
              <li>• Don't be too pushy or aggressive</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onTryAgain}
            className="w-full bg-gradient-rizz text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          <button
            onClick={onHome}
            className="w-full bg-white border-2 border-purple-300 text-purple-600 font-bold py-4 px-6 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

