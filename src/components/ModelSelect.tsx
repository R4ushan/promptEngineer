import React from 'react';
import { ClaudeModel } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ModelSelectProps {
  onSelect: (model: ClaudeModel) => void;
  onBack: () => void;
}

export const ModelSelect: React.FC<ModelSelectProps> = ({ onSelect, onBack }) => {
  const models = [
    {
      id: 'claude-sonnet-4-20250514' as ClaudeModel,
      title: 'Claude Sonnet 4',
      description: 'Balanced performance and speed. Great for most conversations.',
      icon: '⚡',
      badge: 'Recommended'
    },
    {
      id: 'claude-opus-4-20250514' as ClaudeModel,
      title: 'Claude Opus 4',
      description: 'Most advanced model. Superior quality and nuance.',
      icon: '🚀',
      badge: 'Premium'
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
            Choose AI Model
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Select the Claude model to power your conversation
          </p>

          <div className="space-y-4">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => onSelect(model.id)}
                className="w-full bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-6 text-left transition-all transform hover:scale-105 hover:shadow-lg relative"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {model.badge}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{model.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{model.title}</h3>
                    <p className="text-sm text-gray-600">{model.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Make sure your API key has access to the selected model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

