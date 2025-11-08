import Anthropic from '@anthropic-ai/sdk';
import { ClaudeModel, Persona, Goal, Difficulty, CoachFeedback } from '../types';

const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

if (!apiKey) {
  console.warn('VITE_ANTHROPIC_API_KEY is not set. Please add it to your .env file.');
}

const anthropic = new Anthropic({
  apiKey: apiKey || '',
  dangerouslyAllowBrowser: true // Note: In production, use a backend proxy
});

export class ClaudeService {
  private model: ClaudeModel;

  constructor(model: ClaudeModel = 'claude-sonnet-4-20250514') {
    this.model = model;
  }

  async getCoachFeedback(
    userMessage: string,
    conversationHistory: string[],
    persona: Persona,
    goal: Goal,
    difficulty: Difficulty
  ): Promise<CoachFeedback> {
    const difficultyDescriptions = {
      easy: 'Be encouraging and focus on positive aspects. Give gentle suggestions.',
      medium: 'Provide balanced feedback with clear areas for improvement.',
      hard: 'Be critical and demanding. Point out subtle mistakes and missed opportunities.'
    };

    const goalDescriptions = {
      get_number: 'getting their phone number',
      ask_date: 'asking them out on a date',
      be_funny: 'being funny and entertaining',
      make_friend: 'building a genuine friendship'
    };

    const prompt = `You are an expert dating and social skills coach. The user is practicing their conversation skills with an AI persona named ${persona.name} (${persona.description}).

User's Goal: ${goalDescriptions[goal]}
Difficulty Level: ${difficulty} - ${difficultyDescriptions[difficulty]}

Conversation History (last few messages):
${conversationHistory.slice(-6).join('\n')}

User's Latest Message: "${userMessage}"

Analyze this message and provide feedback in the following format:

RATING: [number from 1-10]
CRITIQUE: [2-3 sentences analyzing what they did right or wrong]
SUGGESTION: [1-2 sentences with specific advice for improvement]

Be concise, specific, and actionable. Match the difficulty level in your feedback style.`;

    try {
      const message = await anthropic.messages.create({
        model: this.model,
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      const response = message.content[0].type === 'text' ? message.content[0].text : '';
      
      // Parse the response
      const ratingMatch = response.match(/RATING:\s*(\d+)/);
      const critiqueMatch = response.match(/CRITIQUE:\s*(.+?)(?=SUGGESTION:|$)/s);
      const suggestionMatch = response.match(/SUGGESTION:\s*(.+?)$/s);

      return {
        rizzRating: ratingMatch ? parseInt(ratingMatch[1]) : 5,
        critique: critiqueMatch ? critiqueMatch[1].trim() : 'Keep practicing!',
        suggestion: suggestionMatch ? suggestionMatch[1].trim() : 'Try to be more engaging.'
      };
    } catch (error) {
      console.error('Error getting coach feedback:', error);
      return {
        rizzRating: 5,
        critique: 'Unable to analyze your message at this time.',
        suggestion: 'Keep the conversation going!'
      };
    }
  }

  async getPersonaResponse(
    userMessage: string,
    conversationHistory: string[],
    persona: Persona,
    goal: Goal,
    difficulty: Difficulty
  ): Promise<string> {
    const difficultyBehaviors = {
      easy: 'Be very friendly, receptive, and easy to talk to. Show clear interest in the conversation.',
      medium: 'Be moderately interested. Require some effort to engage. Respond naturally with mixed signals.',
      hard: 'Be somewhat difficult to impress. Give short responses initially. Make them work for your interest.'
    };

    const prompt = `You are ${persona.name}, ${persona.description}. You're having a conversation with someone who is trying to ${goal === 'get_number' ? 'get your phone number' : goal === 'ask_date' ? 'ask you out on a date' : goal === 'be_funny' ? 'entertain you and make you laugh' : 'become friends with you'}.

Personality traits based on your description: ${persona.description}
Difficulty level: ${difficulty} - ${difficultyBehaviors[difficulty]}

Conversation so far:
${conversationHistory.slice(-10).join('\n')}

Their latest message: "${userMessage}"

Respond as ${persona.name} would. Keep your response natural, conversational, and between 1-3 sentences. Show personality. Don't be overly formal. If they're doing well, show interest. If they're being weird or inappropriate, react accordingly. Stay in character.

Your response:`;

    try {
      const message = await anthropic.messages.create({
        model: this.model,
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return message.content[0].type === 'text' ? message.content[0].text : 'Hey there!';
    } catch (error) {
      console.error('Error getting persona response:', error);
      return 'Sorry, I need a moment to think about that...';
    }
  }

  async detectWinOrLoss(
    conversationHistory: string[],
    goal: Goal,
    persona: Persona
  ): Promise<'win' | 'loss' | 'continue'> {
    const goalDetectionPrompts = {
      get_number: 'Did the persona share their phone number or clearly agree to share it?',
      ask_date: 'Did the persona agree to go on a date?',
      be_funny: 'Has the conversation been consistently entertaining with the persona showing genuine amusement? (Check if at least 5+ messages have been exchanged)',
      make_friend: 'Has a genuine friendly connection been established with plans to hang out or continue talking? (Check if at least 5+ messages have been exchanged)'
    };

    const lossDetectionPrompt = 'Did the persona clearly reject, block, or show they want to end the conversation? Are they expressing discomfort or disinterest?';

    const prompt = `Analyze this conversation between a user and ${persona.name}:

${conversationHistory.slice(-15).join('\n')}

User's Goal: ${goal}

Questions:
1. Win Condition - ${goalDetectionPrompts[goal]}
2. Loss Condition - ${lossDetectionPrompt}

Respond with ONLY one word: WIN, LOSS, or CONTINUE

WIN = Goal clearly achieved
LOSS = Conversation failed or persona rejected/blocked user
CONTINUE = Conversation ongoing, neither win nor loss yet

Your answer:`;

    try {
      const message = await anthropic.messages.create({
        model: this.model,
        max_tokens: 50,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      const response = message.content[0].type === 'text' ? message.content[0].text.toUpperCase().trim() : 'CONTINUE';
      
      if (response.includes('WIN')) return 'win';
      if (response.includes('LOSS')) return 'loss';
      return 'continue';
    } catch (error) {
      console.error('Error detecting win/loss:', error);
      return 'continue';
    }
  }
}

