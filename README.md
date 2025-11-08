# RizzX - AI-Powered Conversational Training Simulator

An innovative chat application where users practice their conversational skills ("rizz") by messaging AI personas, with real-time AI coaching feedback after every message.

![RizzX](https://img.shields.io/badge/AI-Powered-purple) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-cyan)

## 🎯 Features

### Core Concept
Practice your conversational skills with AI personas in a safe, judgment-free environment. After every message you send, an AI Coach provides instant feedback before the conversation continues.

### Key Features

1. **Setup Flow**
   - Choose gender (Guy/Girl) to reveal gender-specific personas
   - Select from unique personas: Witty Barista, Shy Classmate, Dating App Match, and more
   - Set your goal: Get their number, Ask for a date, Be funny and witty, or Make a new friend
   - Choose difficulty: Easy, Medium, or Hard
   - Select AI model: Claude Sonnet 4 or Claude Opus 4

2. **Unique "Coach-First" Mechanic**
   - Send a message
   - AI Coach modal appears with:
     - Rizz Rating (X/10)
     - Detailed critique
     - Actionable suggestions
   - Click "Continue" to post your message
   - AI persona responds naturally
   - Repeat!

3. **Win/Lose Detection**
   - App intelligently detects goal achievement (Victory screen)
   - Detects conversation failures (Game Over screen)
   - Dynamic feedback based on conversation flow

4. **Beautiful Design**
   - Instagram DM-inspired interface
   - Purple-pink gradient color scheme
   - Smooth animations and transitions
   - Fully mobile-responsive
   - Modern, clean UI/UX

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Anthropic API key (Claude API access)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Anthropic API key:
   ```
   VITE_ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
promptEngineer/
├── src/
│   ├── components/          # React components
│   │   ├── SetupScreen.tsx
│   │   ├── GenderSelect.tsx
│   │   ├── PersonaSelect.tsx
│   │   ├── GoalSelect.tsx
│   │   ├── DifficultySelect.tsx
│   │   ├── ModelSelect.tsx
│   │   ├── ChatScreen.tsx
│   │   ├── CoachModal.tsx
│   │   ├── VictoryScreen.tsx
│   │   └── GameOverScreen.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useGameState.ts
│   │   └── useClaudeService.ts
│   ├── services/            # API services
│   │   └── claudeService.ts
│   ├── data/                # Static data
│   │   ├── personas.ts
│   │   └── goals.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎮 How to Play

1. **Start the app** and click "Start Training"
2. **Choose gender** of the AI persona you want to talk to
3. **Select a persona** from the available options
4. **Set your goal** for the conversation
5. **Choose difficulty level** (Easy, Medium, or Hard)
6. **Select AI model** (Sonnet 4 or Opus 4)
7. **Start chatting!** Type a message and send it
8. **Review AI Coach feedback** after each message
9. **Continue the conversation** and try to achieve your goal
10. **Win or learn** from the experience!

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2 with TypeScript
- **Styling:** Tailwind CSS 3.3
- **Build Tool:** Vite 5.0
- **AI Integration:** Anthropic Claude API (Sonnet 4 & Opus 4)
- **Icons:** Lucide React
- **State Management:** Custom React hooks

## 🔒 Security

- API keys are stored in `.env` files (never committed to git)
- `.gitignore` configured to exclude sensitive files
- Browser-based API calls (Note: For production, implement a backend proxy)

## ⚠️ Important Notes

- **API Usage:** This app uses the Claude API which may incur costs. Monitor your usage.
- **Browser Warning:** The app uses `dangerouslyAllowBrowser: true` for the Anthropic SDK. In production, you should implement a backend proxy to handle API calls securely.
- **Model Access:** Ensure your API key has access to the selected Claude models.

## 🎨 Customization

### Adding New Personas

Edit `src/data/personas.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Name',
  emoji: '☕',
  description: 'Description',
  gender: 'guy' | 'girl',
  avatar: '👨'
}
```

### Adding New Goals

Edit `src/data/goals.ts`:

```typescript
{
  id: 'goal_id',
  title: 'Goal Title',
  description: 'Goal description',
  icon: '📱'
}
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme.

## 🐛 Troubleshooting

**Issue:** API key not working
- Ensure your `.env` file is in the root directory
- Restart the dev server after adding the API key
- Verify your API key is valid and has the correct permissions

**Issue:** Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure you're using Node.js v18 or higher

**Issue:** Models not responding
- Check your API key has access to Claude Sonnet 4 and Opus 4
- Check the browser console for error messages
- Verify your internet connection

## 📝 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- Built with Claude AI assistance
- Powered by Anthropic's Claude API
- Inspired by modern dating apps and conversation training tools

## 💡 Future Enhancements

- Backend proxy for secure API calls
- User accounts and progress tracking
- More personas and scenarios
- Conversation history and analytics
- Multiplayer mode
- Voice chat integration

---

**Made with 💜 by the RizzX Team**

Practice makes perfect. Build your confidence! 💪✨
