import React from 'react';
import { Trophy, Home, RotateCcw } from 'lucide-react';
import { Persona, Goal } from '../types';

interface VictoryScreenProps {
  persona: Persona;
  goal: Goal;
  messageCount: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({
  persona,
  goal,
  messageCount,
  onPlayAgain,
  onHome
}) => {
  const goalMessages = {
    get_number: `You got ${persona.name}'s number!`,
    ask_date: `${persona.name} said yes to a date!`,
    be_funny: 'You kept the conversation entertaining!',
    make_friend: `You made a new friend in ${persona.name}!`
  };

  return (
    <div className="min-h-screen bg-gradient-rizz flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-slideUp">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-4 animate-bounce">
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Victory! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            {goalMessages[goal]}
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="text-4xl">{persona.avatar}</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">{persona.name}</h3>
                <p className="text-sm text-gray-600">{persona.description.split(' - ')[0]}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around text-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 flex-1 mx-1">
              <p className="text-3xl font-bold text-purple-600">{messageCount}</p>
              <p className="text-sm text-gray-600">Messages</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 flex-1 mx-1">
              <p className="text-3xl font-bold text-pink-600">✓</p>
              <p className="text-sm text-gray-600">Goal Achieved</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onPlayAgain}
            className="w-full bg-gradient-rizz text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
          <button
            onClick={onHome}
            className="w-full bg-white border-2 border-purple-300 text-purple-600 font-bold py-4 px-6 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Keep practicing to master your rizz! 💪✨
        </p>
      </div>
    </div>
  );
};

