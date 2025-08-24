import React from 'react';
import { Button } from './ui/button';
import { Trophy, RefreshCw, Home, Star, Target, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onChooseAnother: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  onPlayAgain,
  onChooseAnother
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage === 100) return { message: "Perfect Score!", emoji: "🎉" };
    if (percentage >= 80) return { message: "Excellent!", emoji: "🌟" };
    if (percentage >= 60) return { message: "Good Job!", emoji: "👍" };
    if (percentage >= 40) return { message: "Keep Practicing!", emoji: "💪" };
    return { message: "Try Again!", emoji: "📚" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-gradient-game flex flex-col">
      {/* Top Large Banner Ad */}
      <div className="w-full h-32 bg-muted/50 flex items-center justify-center border-b-2 border-dashed border-border">
        <span className="text-muted-foreground">Large Banner Ad (970x90 / 728x90)</span>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="game-card max-w-md w-full p-8 text-center animate-bounce-in">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {percentage >= 80 ? (
              <Trophy className="w-24 h-24 text-warning animate-pulse-glow" />
            ) : percentage >= 60 ? (
              <Award className="w-24 h-24 text-secondary animate-pulse" />
            ) : (
              <Target className="w-24 h-24 text-primary animate-pulse" />
            )}
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-2 text-gradient">
          {performance.message}
        </h2>
        
        <div className="text-6xl mb-4">{performance.emoji}</div>

        <div className="mb-8">
          <p className="text-5xl font-bold text-primary mb-2">
            {score}/{totalQuestions}
          </p>
          <p className="text-xl text-muted-foreground">
            You scored {percentage}%
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-8 h-8 transition-all",
                i < Math.ceil(percentage / 20)
                  ? "text-warning fill-warning animate-bounce-in"
                  : "text-muted-foreground/30"
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

          {/* Native Style Ad Block */}
          <div className="w-full bg-muted/50 rounded-lg mb-6 p-4 border-2 border-dashed border-border">
            <span className="text-muted-foreground text-sm">Native Ad: Recommended English Learning Resources</span>
          </div>

          {/* Large Rectangle Ad */}
          <div className="w-full h-64 bg-muted/50 rounded-lg mb-8 flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-muted-foreground">Large Rectangle Ad (336x280)</span>
          </div>

        <div className="space-y-4">
          <Button
            onClick={onPlayAgain}
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground font-bold btn-game"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Play Again
          </Button>
          
          <Button
            onClick={onChooseAnother}
            variant="outline"
            size="lg"
            className="w-full hover:bg-secondary/10 hover:border-secondary"
          >
            <Home className="mr-2 h-5 w-5" />
            Choose Another Quiz
          </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Ad */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-muted/50 flex items-center justify-center border-t-2 border-dashed border-border z-10">
        <span className="text-muted-foreground">Mobile Sticky Banner (320x50)</span>
      </div>
    </div>
  );
};

export default ResultsScreen;