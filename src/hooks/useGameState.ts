import { useState, useCallback } from 'react';
import { GameState, Gender, Persona, Goal, Difficulty, ClaudeModel, Message } from '../types';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    stage: 'setup',
    messages: [],
    conversationContext: []
  });

  const setGender = useCallback((gender: Gender) => {
    setGameState(prev => ({
      ...prev,
      selectedGender: gender,
      stage: 'persona-select'
    }));
  }, []);

  const setPersona = useCallback((persona: Persona) => {
    setGameState(prev => ({
      ...prev,
      selectedPersona: persona,
      stage: 'goal-select'
    }));
  }, []);

  const setGoal = useCallback((goal: Goal) => {
    setGameState(prev => ({
      ...prev,
      selectedGoal: goal,
      stage: 'difficulty-select'
    }));
  }, []);

  const setDifficulty = useCallback((difficulty: Difficulty) => {
    setGameState(prev => ({
      ...prev,
      selectedDifficulty: difficulty,
      stage: 'model-select'
    }));
  }, []);

  const setModel = useCallback((model: ClaudeModel) => {
    setGameState(prev => ({
      ...prev,
      selectedModel: model,
      stage: 'chatting'
    }));
  }, []);

  const addMessage = useCallback((message: Message) => {
    setGameState(prev => {
      const contextEntry = `${message.sender === 'user' ? 'User' : prev.selectedPersona?.name}: ${message.content}`;
      return {
        ...prev,
        messages: [...prev.messages, message],
        conversationContext: [...prev.conversationContext, contextEntry]
      };
    });
  }, []);

  const setStage = useCallback((stage: GameState['stage']) => {
    setGameState(prev => ({
      ...prev,
      stage
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      stage: 'setup',
      messages: [],
      conversationContext: []
    });
  }, []);

  return {
    gameState,
    setGender,
    setPersona,
    setGoal,
    setDifficulty,
    setModel,
    addMessage,
    setStage,
    resetGame
  };
};

