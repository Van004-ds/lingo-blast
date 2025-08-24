import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizSelection from '@/components/QuizSelection';
import GamePlay from '@/components/GamePlay';
import ResultsScreen from '@/components/ResultsScreen';
import FAQSection from '@/components/FAQSection';
import questionsData from '@/data/questions.json';

type GameState = 'start' | 'selection' | 'playing' | 'results';
type QuizType = keyof typeof questionsData;

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const handleStart = () => {
    setGameState('selection');
  };

  const handleBack = () => {
    setGameState('start');
  };

  const handleSelectQuiz = (quizType: string) => {
    setSelectedQuiz(quizType as QuizType);
    setGameState('playing');
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setGameState('results');
  };

  const handlePlayAgain = () => {
    if (selectedQuiz) {
      setGameState('playing');
    }
  };

  const handleChooseAnother = () => {
    setSelectedQuiz(null);
    setGameState('selection');
  };

  const getQuizName = () => {
    if (!selectedQuiz) return '';
    const quizNames: Record<QuizType, string> = {
      vocabulary: 'Vocabulary Quiz',
      grammar: 'Grammar Quiz',
      synonymsAntonyms: 'Synonyms & Antonyms',
      spelling: 'Guess the Spelling',
      dailyPuzzle: 'Daily Word Puzzle'
    };
    return quizNames[selectedQuiz];
  };

  return (
    <>
      {gameState === 'start' && (
        <>
          <StartScreen onStart={handleStart} />
          <div className="bg-gradient-game py-16 px-4">
            <FAQSection />
            {/* Bottom Ad Space */}
            <div className="w-full max-w-4xl mx-auto h-32 bg-muted/50 rounded-lg mt-8 flex items-center justify-center border-2 border-dashed border-border">
              <span className="text-muted-foreground">Footer Advertisement</span>
            </div>
          </div>
        </>
      )}
      
      {gameState === 'selection' && (
        <>
          <QuizSelection 
            onSelectQuiz={handleSelectQuiz}
            onBack={handleBack}
          />
          <div className="bg-gradient-game py-16 px-4">
            <FAQSection />
          </div>
        </>
      )}
      
      {gameState === 'playing' && selectedQuiz && (
        <GamePlay
          questions={questionsData[selectedQuiz]}
          quizName={getQuizName()}
          onComplete={handleQuizComplete}
        />
      )}
      
      {gameState === 'results' && selectedQuiz && (
        <ResultsScreen
          score={finalScore}
          totalQuestions={questionsData[selectedQuiz].length}
          onPlayAgain={handlePlayAgain}
          onChooseAnother={handleChooseAnother}
        />
      )}
    </>
  );
};

export default Index;