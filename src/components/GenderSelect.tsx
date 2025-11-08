import React from 'react';
import { Gender } from '../types';
import { ArrowLeft } from 'lucide-react';

interface GenderSelectProps {
  onSelect: (gender: Gender) => void;
  onBack: () => void;
}

export const GenderSelect: React.FC<GenderSelectProps> = ({ onSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-rizz flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <button
          onClick={onBack}
          className="mb-4 text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Who do you want to talk to?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Choose the gender of your AI match
          </p>

          <div className="space-y-4">
            <button
              onClick={() => onSelect('guy')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-6 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-xl"
            >
              <span className="text-3xl">👨</span>
              <span>Guy</span>
            </button>

            <button
              onClick={() => onSelect('girl')}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-6 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-xl"
            >
              <span className="text-3xl">👩</span>
              <span>Girl</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

