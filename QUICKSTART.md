# 🚀 Quick Start Guide - RizzX

Get up and running in 3 minutes!

## Step 1: Install Dependencies

Open your terminal in this directory and run:

```bash
npm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, and the Anthropic SDK.

## Step 2: API Key (Already Configured! ✅)

Your Anthropic API key is already set up in the `.env` file:
- ✅ API key is configured
- ✅ File is in `.gitignore` (secure, won't be pushed to git)
- ✅ Ready to use!

## Step 3: Start the Development Server

```bash
npm run dev
```

The app will start on `http://localhost:5173`

## Step 4: Open in Browser

Navigate to the URL shown in your terminal (usually `http://localhost:5173`)

## 🎮 How to Use

1. Click **"Start Training"**
2. Choose **Guy or Girl** (who you want to talk to)
3. Select a **persona** (e.g., Witty Barista, Shy Classmate)
4. Pick your **goal** (Get number, Ask for date, etc.)
5. Choose **difficulty** (Easy/Medium/Hard)
6. Select **AI model** (Sonnet 4 recommended)
7. **Start chatting!**

### The Coach-First Experience

After you type and send each message:
1. ⏸️ Message is held
2. 🤖 AI Coach analyzes it
3. 📊 You see your Rizz Rating + feedback
4. 💡 Get suggestions for improvement
5. ✅ Click "Continue" to send the message
6. 💬 AI persona responds
7. 🔄 Repeat!

## 🎯 Win/Lose Conditions

- **Win:** Achieve your goal (get number, secure date, etc.)
- **Lose:** Conversation fails or persona rejects you
- The AI automatically detects outcomes!

## ⚙️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Features Highlights

- ✨ Beautiful Instagram DM-inspired UI
- 💜 Purple-pink gradient theme
- 📱 Fully mobile responsive
- 🎭 10 unique AI personas (5 guys, 5 girls)
- 🎯 4 different conversation goals
- 💪 3 difficulty levels
- 🤖 2 Claude models (Sonnet 4 & Opus 4)
- 🏆 Dynamic win/lose detection
- 📊 Real-time AI coaching feedback

## 🔧 Troubleshooting

### Port already in use?
If port 5173 is taken, Vite will automatically use the next available port. Check the terminal output.

### API errors?
- Verify your `.env` file exists
- Restart the dev server after any `.env` changes
- Check browser console for detailed error messages

### Module not found?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Project Structure

```
src/
├── components/      # All React UI components
├── hooks/          # Custom React hooks
├── services/       # Claude API integration
├── data/           # Personas and goals data
├── types/          # TypeScript type definitions
└── App.tsx         # Main app logic
```

## 🎓 Learning Tips

1. **Start with Easy mode** to understand the mechanics
2. **Read AI Coach feedback carefully** - it's genuinely helpful!
3. **Try different personas** - they all have unique personalities
4. **Experiment with goals** - some are harder than others
5. **Medium/Hard modes** provide more realistic practice

## 💡 Pro Tips

- Be genuine and authentic in your messages
- Ask open-ended questions to keep conversations flowing
- Show interest in what the persona says
- Don't be too pushy or aggressive
- Use the AI Coach suggestions to improve!

## 🛡️ Security Note

Your API key is stored in `.env` which is:
- ✅ Excluded from git via `.gitignore`
- ✅ Never committed to version control
- ✅ Safe on your local machine

**Warning:** This app uses browser-based API calls. For production apps, implement a backend proxy to keep API keys server-side.

## 🎉 You're All Set!

Run `npm run dev` and start practicing your rizz!

Have fun and build your confidence! 💪✨

---

Need help? Check the main `README.md` for detailed documentation.

