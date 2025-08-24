import React from 'react';
import { Button } from './ui/button';
import { BookOpen, PenTool, RefreshCw, SpellCheck, Puzzle, ArrowLeft } from 'lucide-react';

interface QuizSelectionProps {
  onSelectQuiz: (quizType: string) => void;
  onBack: () => void;
}

const quizTypes = [
  {
    id: 'vocabulary',
    name: 'Vocabulary Quiz',
    icon: BookOpen,
    color: 'from-primary to-primary-glow',
    description: 'Test your word knowledge'
  },
  {
    id: 'grammar',
    name: 'Grammar Quiz',
    icon: PenTool,
    color: 'from-secondary to-secondary/70',
    description: 'Master English grammar rules'
  },
  {
    id: 'synonymsAntonyms',
    name: 'Synonyms & Antonyms',
    icon: RefreshCw,
    color: 'from-accent to-accent/70',
    description: 'Find similar and opposite words'
  },
  {
    id: 'spelling',
    name: 'Guess the Spelling',
    icon: SpellCheck,
    color: 'from-success to-success/70',
    description: 'Spell words correctly'
  },
  {
    id: 'dailyPuzzle',
    name: 'Daily Word Puzzle',
    icon: Puzzle,
    color: 'from-warning to-warning/70',
    description: 'Daily brain teasers'
  }
];

const QuizSelection: React.FC<QuizSelectionProps> = ({ onSelectQuiz, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-game flex flex-col items-center justify-center p-4">
      {/* Ad Banner Space */}
      <div className="w-full max-w-4xl h-24 bg-muted/50 rounded-lg mb-8 flex items-center justify-center border-2 border-dashed border-border">
        <span className="text-muted-foreground">Advertisement Banner</span>
      </div>

      <div className="max-w-4xl w-full animate-slide-up">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-4 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
          Choose Your Quiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizTypes.map((quiz, index) => {
            const Icon = quiz.icon;
            return (
              <button
                key={quiz.id}
                onClick={() => onSelectQuiz(quiz.id)}
                className="game-card p-6 text-center group hover:scale-105 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${quiz.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{quiz.name}</h3>
                <p className="text-sm text-muted-foreground">{quiz.description}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Each quiz contains 10 questions with a 10-second timer
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;