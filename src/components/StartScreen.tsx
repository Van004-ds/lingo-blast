import React from 'react';
import { Button } from './ui/button';
import { Trophy, Brain, Sparkles } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-game flex flex-col items-center justify-center p-4">
      {/* Ad Banner Space */}
      <div className="w-full max-w-4xl h-24 bg-muted/50 rounded-lg mb-8 flex items-center justify-center border-2 border-dashed border-border">
        <span className="text-muted-foreground">Advertisement Banner</span>
      </div>

      <div className="game-card max-w-md w-full p-8 text-center animate-bounce-in">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Trophy className="w-20 h-20 text-warning animate-pulse-glow" />
            <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-gradient">
          English Quiz Challenge
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Test your English skills with fun and challenging quizzes!
        </p>

        <div className="space-y-4">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground font-bold text-xl py-6 btn-game hover:scale-105 transition-all"
          >
            <Brain className="mr-2 h-6 w-6" />
            Start Game
          </Button>

          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Quiz Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10s</div>
              <div className="text-sm text-muted-foreground">Per Question</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Challenge yourself and improve your English!
        </p>
      </div>
    </div>
  );
};

export default StartScreen;