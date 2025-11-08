# RizzX - AI-Powered Conversational Training Simulator | Anthropic Hackaton

An innovative chat application where cs students practice their conversational skills ("rizz") by messaging AI personas, with real-time AI coaching feedback after every message.

### Core Concept
We challenged ourselves to **fully prompt-engineer** this project — building an app that relies entirely on AI instructions rather than hard-coded logic(was not easy!)

This approach turned out to be much harder than expected.  
Through the process, we learned that:
- Prompt engineering doesn’t replace real coding fundamentals.
- Safe and structured AI use still requires technical competence.
- AI is a powerful tool — but only in the hands of developers who understand it.

### 🧩 Setup Flow
- Choose **gender** (Guy/Girl) to unlock gender-specific personas  
- Select from personas like **Witty Barista ☕**, **Shy Classmate 🎓**, or **Dating App Match 💕**  
- Set your **goal:** Get their number, Ask for a date, Be funny, or Make a new friend  
- Pick your **difficulty:** Easy / Medium / Hard  
- Choose your **AI model:** Claude Sonnet 4 or Claude Opus 4  

### 🧑‍🏫 Coach-First Feedback System
- Send a message → Instantly receive coaching before it’s sent  
- AI Coach gives:
  - **Rizz Rating (X/10)**
  - **Detailed critique**
  - **Actionable improvement tips**
- Continue the chat and improve dynamically

### 🧠 Smart Outcome Detection
- Detects successful goals (Victory screen 🎉)
- Detects failures (Game Over screen 💀)
- Dynamic, context-aware feedback based on conversation flow

### 🎨 Design & Experience
- Instagram DM–style chat UI  
- Purple-pink gradient theme  
- Smooth animations and transitions  
- Fully mobile-responsive and modern design  


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
   
   Navigate to the URL shown in your terminal)
   

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
