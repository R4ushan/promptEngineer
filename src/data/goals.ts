import { Goal } from '../types';

export interface GoalConfig {
  id: Goal;
  title: string;
  description: string;
  icon: string;
}

export const goals: GoalConfig[] = [
  {
    id: 'get_number',
    title: 'Get Their Number',
    description: 'Convince them to share their phone number',
    icon: '📱'
  },
  {
    id: 'ask_date',
    title: 'Ask for a Date',
    description: 'Successfully ask them out and get a yes',
    icon: '💕'
  },
  {
    id: 'be_funny',
    title: 'Be Funny & Witty',
    description: 'Keep the conversation entertaining and make them laugh',
    icon: '😄'
  },
  {
    id: 'make_friend',
    title: 'Make a New Friend',
    description: 'Build a genuine connection and friendship',
    icon: '🤝'
  }
];

