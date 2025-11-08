import React from 'react';
import { Sparkles } from 'lucide-react';

interface SetupScreenProps {
  onStart: () => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-rizz flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-rizz-alt rounded-full mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-rizz bg-clip-text text-transparent mb-2">
            RizzX
          </h1>
          <p className="text-gray-600 text-lg">
            AI-Powered Conversational Trainer
          </p>
        </div>

        <div className="space-y-4 mb-8 text-left">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Choose Your Match</h3>
              <p className="text-sm text-gray-600">Pick from unique AI personas</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Set Your Goal</h3>
              <p className="text-sm text-gray-600">Get their number, ask them out, or make a friend</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Get AI Coaching</h3>
              <p className="text-sm text-gray-600">Receive instant feedback after every message</p>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-rizz text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
        >
          Start Training
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Practice makes perfect. Build your confidence! 💪
        </p>
      </div>
    </div>
  );
};

