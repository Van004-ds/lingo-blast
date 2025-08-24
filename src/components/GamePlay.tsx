import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Check, X, Timer, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface GamePlayProps {
  questions: Question[];
  quizName: string;
  onComplete: (score: number) => void;
}

const GamePlay: React.FC<GamePlayProps> = ({ questions, quizName, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (showResult || isTimeUp) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimeUp(true);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, showResult, isTimeUp]);

  const handleTimeUp = useCallback(() => {
    setShowResult(true);
    setSelectedAnswer(null);
  }, []);

  const handleAnswer = (index: number) => {
    if (showResult || isTimeUp) return;

    setSelectedAnswer(index);
    setShowResult(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(10);
      setIsTimeUp(false);
    } else {
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getButtonStyle = (index: number) => {
    if (!showResult && !isTimeUp) {
      return 'hover:bg-primary/10 hover:border-primary';
    }

    if (index === question.correct) {
      return 'bg-success text-success-foreground border-success animate-pulse';
    }

    if (selectedAnswer === index && index !== question.correct) {
      return 'bg-error text-error-foreground border-error animate-shake';
    }

    return 'opacity-50';
  };

  return (
    <div className="min-h-screen bg-gradient-game flex flex-col items-center justify-center p-4">
      {/* Ad Banner Space */}
      <div className="w-full max-w-4xl h-24 bg-muted/50 rounded-lg mb-6 flex items-center justify-center border-2 border-dashed border-border">
        <span className="text-muted-foreground">Advertisement Banner</span>
      </div>

      <div className="max-w-2xl w-full">
        {/* Quiz Header */}
        <div className="game-card p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-muted-foreground">{quizName}</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Timer className={cn(
                  "h-5 w-5",
                  timeLeft <= 3 ? "text-error animate-timer-pulse" : "text-primary"
                )} />
                <span className={cn(
                  "font-bold text-lg",
                  timeLeft <= 3 ? "text-error" : "text-primary"
                )}>
                  {timeLeft}s
                </span>
              </div>
              <div className="text-sm font-medium">
                Score: {score}/{currentQuestion}
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="text-sm text-muted-foreground mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Question Card */}
        <div className="game-card p-8 mb-6 animate-slide-up">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {question.question}
          </h2>

          {/* Ad placement after question 5 */}
          {currentQuestion === 4 && (
            <div className="w-full h-20 bg-muted/50 rounded-lg mb-6 flex items-center justify-center border-2 border-dashed border-border">
              <span className="text-muted-foreground text-sm">Mid-Quiz Advertisement</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult || isTimeUp}
                variant="outline"
                className={cn(
                  "p-6 h-auto text-left justify-start text-lg transition-all",
                  getButtonStyle(index)
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option}</span>
                  {showResult || isTimeUp ? (
                    index === question.correct ? (
                      <Check className="h-6 w-6 text-success ml-2" />
                    ) : selectedAnswer === index ? (
                      <X className="h-6 w-6 text-error ml-2" />
                    ) : null
                  ) : null}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {(showResult || isTimeUp) && (
          <div className="flex justify-center animate-bounce-in">
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-gradient-primary text-primary-foreground btn-game"
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              ) : (
                'See Results'
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePlay;