import { useState, useCallback, useRef, useEffect } from 'react';
import { ClaudeService } from '../services/claudeService';
import { ClaudeModel, CoachFeedback, Persona, Goal, Difficulty } from '../types';

export const useClaudeService = (model: ClaudeModel) => {
  const serviceRef = useRef<ClaudeService>(new ClaudeService(model));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    serviceRef.current = new ClaudeService(model);
  }, [model]);

  const getCoachFeedback = useCallback(async (
    userMessage: string,
    conversationHistory: string[],
    persona: Persona,
    goal: Goal,
    difficulty: Difficulty
  ): Promise<CoachFeedback> => {
    setIsLoading(true);
    try {
      const feedback = await serviceRef.current.getCoachFeedback(
        userMessage,
        conversationHistory,
        persona,
        goal,
        difficulty
      );
      return feedback;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getPersonaResponse = useCallback(async (
    userMessage: string,
    conversationHistory: string[],
    persona: Persona,
    goal: Goal,
    difficulty: Difficulty
  ): Promise<string> => {
    setIsLoading(true);
    try {
      const response = await serviceRef.current.getPersonaResponse(
        userMessage,
        conversationHistory,
        persona,
        goal,
        difficulty
      );
      return response;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const checkWinLoss = useCallback(async (
    conversationHistory: string[],
    goal: Goal,
    persona: Persona
  ): Promise<'win' | 'loss' | 'continue'> => {
    const result = await serviceRef.current.detectWinOrLoss(
      conversationHistory,
      goal,
      persona
    );
    return result;
  }, []);

  return {
    getCoachFeedback,
    getPersonaResponse,
    checkWinLoss,
    isLoading
  };
};

