import React, { useState } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizSelection from '@/components/QuizSelection';
import GamePlay from '@/components/GamePlay';
import ResultsScreen from '@/components/ResultsScreen';
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
        <StartScreen onStart={handleStart} />
      )}
      
      {gameState === 'selection' && (
        <QuizSelection 
          onSelectQuiz={handleSelectQuiz}
          onBack={handleBack}
        />
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