import React, { useState, useRef, useEffect } from 'react';
import { Message, Persona, CoachFeedback } from '../types';
import { Send, ArrowLeft, User } from 'lucide-react';
import { CoachModal } from './CoachModal';

interface ChatScreenProps {
  persona: Persona;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onBack: () => void;
  coachFeedback: CoachFeedback | null;
  showCoachModal: boolean;
  onCoachContinue: () => void;
  isLoading: boolean;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({
  persona,
  messages,
  onSendMessage,
  onBack,
  coachFeedback,
  showCoachModal,
  onCoachContinue,
  isLoading
}) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-rizz text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
              {persona.avatar}
            </div>
            <div>
              <h2 className="font-bold text-lg">{persona.name}</h2>
              <p className="text-sm opacity-90">{persona.emoji} {persona.description.split(' - ')[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 max-w-4xl w-full mx-auto">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{persona.avatar}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Start the conversation!
              </h3>
              <p className="text-gray-600">
                Say something to {persona.name}. The AI Coach will help you after each message.
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
            >
              {message.sender === 'persona' && (
                <div className="w-8 h-8 bg-gradient-rizz rounded-full flex items-center justify-center text-lg flex-shrink-0">
                  {persona.avatar}
                </div>
              )}
              <div className={`max-w-xs md:max-w-md ${message.sender === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-rizz text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Message ${persona.name}...`}
            className="flex-1 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:border-purple-400 transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-rizz text-white p-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Coach Modal */}
      {showCoachModal && coachFeedback && (
        <CoachModal
          feedback={coachFeedback}
          onContinue={onCoachContinue}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

