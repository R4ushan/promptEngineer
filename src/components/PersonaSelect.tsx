import React from 'react';
import { Persona, Gender } from '../types';
import { getPersonasByGender } from '../data/personas';
import { ArrowLeft } from 'lucide-react';

interface PersonaSelectProps {
  gender: Gender;
  onSelect: (persona: Persona) => void;
  onBack: () => void;
}

export const PersonaSelect: React.FC<PersonaSelectProps> = ({ gender, onSelect, onBack }) => {
  const personas = getPersonasByGender(gender);

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
            Choose Your Match
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Each persona has a unique personality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => onSelect(persona)}
                className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-6 text-left transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{persona.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{persona.name}</h3>
                    <span className="text-2xl">{persona.emoji}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{persona.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

