import React from 'react';
import { CoachFeedback } from '../types';
import { X, TrendingUp } from 'lucide-react';

interface CoachModalProps {
  feedback: CoachFeedback;
  onContinue: () => void;
  isLoading: boolean;
}

export const CoachModal: React.FC<CoachModalProps> = ({ feedback, onContinue, isLoading }) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-500';
    if (rating >= 6) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getRatingEmoji = (rating: number) => {
    if (rating >= 9) return '🔥';
    if (rating >= 7) return '😎';
    if (rating >= 5) return '👍';
    if (rating >= 3) return '😬';
    return '💀';
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mb-4"></div>
            <h3 className="text-xl font-bold text-gray-800">AI Coach Analyzing...</h3>
            <p className="text-gray-600 mt-2">Getting your feedback ready</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-800">AI Coach Feedback</h3>
          </div>
        </div>

        {/* Rizz Rating */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-rizz rounded-full mb-3">
            <span className="text-4xl text-white font-bold">
              {feedback.rizzRating}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className={`text-3xl font-bold ${getRatingColor(feedback.rizzRating)}`}>
              Rizz Rating: {feedback.rizzRating}/10
            </h4>
            <span className="text-3xl">{getRatingEmoji(feedback.rizzRating)}</span>
          </div>
        </div>

        {/* Critique */}
        <div className="mb-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
          <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
            <span>📊</span> Critique
          </h5>
          <p className="text-gray-700 text-sm leading-relaxed">{feedback.critique}</p>
        </div>

        {/* Suggestion */}
        <div className="mb-6 p-4 bg-pink-50 rounded-xl border border-pink-200">
          <h5 className="font-bold text-pink-900 mb-2 flex items-center gap-2">
            <span>💡</span> Suggestion
          </h5>
          <p className="text-gray-700 text-sm leading-relaxed">{feedback.suggestion}</p>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-gradient-rizz text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
        >
          Continue Conversation
        </button>
      </div>
    </div>
  );
};

