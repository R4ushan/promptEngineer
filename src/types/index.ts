export type Gender = 'guy' | 'girl';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type ClaudeModel = 'claude-sonnet-4-20250514' | 'claude-opus-4-20250514';

export type Goal = 
  | 'get_number'
  | 'ask_date'
  | 'be_funny'
  | 'make_friend';

export interface Persona {
  id: string;
  name: string;
  emoji: string;
  description: string;
  gender: Gender;
  avatar: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'persona';
  content: string;
  timestamp: Date;
}

export interface CoachFeedback {
  rizzRating: number;
  critique: string;
  suggestion: string;
}

export interface GameState {
  stage: 'setup' | 'gender-select' | 'persona-select' | 'goal-select' | 'difficulty-select' | 'model-select' | 'chatting' | 'victory' | 'game-over';
  selectedGender?: Gender;
  selectedPersona?: Persona;
  selectedGoal?: Goal;
  selectedDifficulty?: Difficulty;
  selectedModel?: ClaudeModel;
  messages: Message[];
  conversationContext: string[];
}

export interface SetupConfig {
  gender: Gender;
  persona: Persona;
  goal: Goal;
  difficulty: Difficulty;
  model: ClaudeModel;
}

