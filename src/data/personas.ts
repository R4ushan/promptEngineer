import { Persona } from '../types';

export const personas: Persona[] = [
  // Guy personas
  {
    id: 'witty-barista-guy',
    name: 'Alex',
    emoji: '☕',
    description: 'Witty Barista - Quick with jokes and coffee facts',
    gender: 'guy',
    avatar: '👨‍🍳'
  },
  {
    id: 'shy-classmate-guy',
    name: 'Ryan',
    emoji: '📚',
    description: 'Shy Classmate - Quiet but sweet, loves books',
    gender: 'guy',
    avatar: '🧑‍🎓'
  },
  {
    id: 'dating-match-guy',
    name: 'Jake',
    emoji: '💬',
    description: 'Dating App Match - Adventurous and outgoing',
    gender: 'guy',
    avatar: '🏄‍♂️'
  },
  {
    id: 'gym-bro',
    name: 'Marcus',
    emoji: '💪',
    description: 'Gym Regular - Fitness enthusiast, friendly vibes',
    gender: 'guy',
    avatar: '🏋️‍♂️'
  },
  {
    id: 'musician-guy',
    name: 'Leo',
    emoji: '🎸',
    description: 'Local Musician - Creative and passionate about music',
    gender: 'guy',
    avatar: '🎵'
  },
  
  // Girl personas
  {
    id: 'witty-barista-girl',
    name: 'Emma',
    emoji: '☕',
    description: 'Witty Barista - Charming with a great sense of humor',
    gender: 'girl',
    avatar: '👩‍🍳'
  },
  {
    id: 'shy-classmate-girl',
    name: 'Sophie',
    emoji: '📚',
    description: 'Shy Classmate - Gentle soul who loves reading',
    gender: 'girl',
    avatar: '👩‍🎓'
  },
  {
    id: 'dating-match-girl',
    name: 'Olivia',
    emoji: '💬',
    description: 'Dating App Match - Fun and spontaneous',
    gender: 'girl',
    avatar: '🌸'
  },
  {
    id: 'artist-girl',
    name: 'Maya',
    emoji: '🎨',
    description: 'Art Student - Creative and free-spirited',
    gender: 'girl',
    avatar: '👩‍🎨'
  },
  {
    id: 'athlete-girl',
    name: 'Zoe',
    emoji: '🏃‍♀️',
    description: 'Track Star - Competitive and energetic',
    gender: 'girl',
    avatar: '⚡'
  }
];

export const getPersonasByGender = (gender: string) => {
  return personas.filter(p => p.gender === gender);
};

