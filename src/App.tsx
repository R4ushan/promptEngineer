import React, { useState, useCallback } from 'react';
import { useGameState } from './hooks/useGameState';
import { useClaudeService } from './hooks/useClaudeService';
import { SetupScreen } from './components/SetupScreen';
import { GenderSelect } from './components/GenderSelect';
import { PersonaSelect } from './components/PersonaSelect';
import { GoalSelect } from './components/GoalSelect';
import { DifficultySelect } from './components/DifficultySelect';
import { ModelSelect } from './components/ModelSelect';
import { ChatScreen } from './components/ChatScreen';
import { VictoryScreen } from './components/VictoryScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { CoachFeedback } from './types';

function App() {
  const {
    gameState,
    setGender,
    setPersona,
    setGoal,
    setDifficulty,
    setModel,
    addMessage,
    setStage,
    resetGame
  } = useGameState();

  const claudeService = useClaudeService(gameState.selectedModel || 'claude-sonnet-4-20250514');
  const [coachFeedback, setCoachFeedback] = useState<CoachFeedback | null>(null);
  const [showCoachModal, setShowCoachModal] = useState(false);
  const [pendingUserMessage, setPendingUserMessage] = useState('');

  const handleSendMessage = useCallback(async (content: string) => {
    if (!gameState.selectedPersona || !gameState.selectedGoal || !gameState.selectedDifficulty) {
      return;
    }

    // Store the pending message
    setPendingUserMessage(content);

    // Get coach feedback first
    const feedback = await claudeService.getCoachFeedback(
      content,
      gameState.conversationContext,
      gameState.selectedPersona,
      gameState.selectedGoal,
      gameState.selectedDifficulty
    );

    setCoachFeedback(feedback);
    setShowCoachModal(true);
  }, [gameState, claudeService]);

  const handleCoachContinue = useCallback(async () => {
    setShowCoachModal(false);

    if (!gameState.selectedPersona || !gameState.selectedGoal || !gameState.selectedDifficulty || !pendingUserMessage) {
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user' as const,
      content: pendingUserMessage,
      timestamp: new Date()
    };
    addMessage(userMessage);

    // Get persona response
    const personaResponse = await claudeService.getPersonaResponse(
      pendingUserMessage,
      [...gameState.conversationContext, `User: ${pendingUserMessage}`],
      gameState.selectedPersona,
      gameState.selectedGoal,
      gameState.selectedDifficulty
    );

    // Add persona message
    const personaMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'persona' as const,
      content: personaResponse,
      timestamp: new Date()
    };
    addMessage(personaMessage);

    // Check win/loss condition
    const updatedContext = [
      ...gameState.conversationContext,
      `User: ${pendingUserMessage}`,
      `${gameState.selectedPersona.name}: ${personaResponse}`
    ];

    const result = await claudeService.checkWinLoss(
      updatedContext,
      gameState.selectedGoal,
      gameState.selectedPersona
    );

    if (result === 'win') {
      setStage('victory');
    } else if (result === 'loss') {
      setStage('game-over');
    }

    setPendingUserMessage('');
  }, [gameState, claudeService, pendingUserMessage, addMessage, setStage]);

  const handleBack = useCallback(() => {
    if (gameState.stage === 'gender-select') {
      setStage('setup');
    } else if (gameState.stage === 'persona-select') {
      setStage('gender-select');
    } else if (gameState.stage === 'goal-select') {
      setStage('persona-select');
    } else if (gameState.stage === 'difficulty-select') {
      setStage('goal-select');
    } else if (gameState.stage === 'model-select') {
      setStage('difficulty-select');
    } else if (gameState.stage === 'chatting') {
      setStage('setup');
    }
  }, [gameState.stage, setStage]);

  const renderScreen = () => {
    switch (gameState.stage) {
      case 'setup':
        return <SetupScreen onStart={() => setStage('gender-select')} />;
      
      case 'gender-select':
        return <GenderSelect onSelect={setGender} onBack={handleBack} />;
      
      case 'persona-select':
        return gameState.selectedGender ? (
          <PersonaSelect
            gender={gameState.selectedGender}
            onSelect={setPersona}
            onBack={handleBack}
          />
        ) : null;
      
      case 'goal-select':
        return <GoalSelect onSelect={setGoal} onBack={handleBack} />;
      
      case 'difficulty-select':
        return <DifficultySelect onSelect={setDifficulty} onBack={handleBack} />;
      
      case 'model-select':
        return <ModelSelect onSelect={setModel} onBack={handleBack} />;
      
      case 'chatting':
        return gameState.selectedPersona ? (
          <ChatScreen
            persona={gameState.selectedPersona}
            messages={gameState.messages}
            onSendMessage={handleSendMessage}
            onBack={handleBack}
            coachFeedback={coachFeedback}
            showCoachModal={showCoachModal}
            onCoachContinue={handleCoachContinue}
            isLoading={claudeService.isLoading}
          />
        ) : null;
      
      case 'victory':
        return gameState.selectedPersona && gameState.selectedGoal ? (
          <VictoryScreen
            persona={gameState.selectedPersona}
            goal={gameState.selectedGoal}
            messageCount={gameState.messages.length}
            onPlayAgain={resetGame}
            onHome={resetGame}
          />
        ) : null;
      
      case 'game-over':
        return gameState.selectedPersona && gameState.selectedGoal ? (
          <GameOverScreen
            persona={gameState.selectedPersona}
            goal={gameState.selectedGoal}
            messageCount={gameState.messages.length}
            onTryAgain={resetGame}
            onHome={resetGame}
          />
        ) : null;
      
      default:
        return <SetupScreen onStart={() => setStage('gender-select')} />;
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;

