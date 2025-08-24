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
  const quizDescriptions = {
    vocabulary: "Master essential English vocabulary with our comprehensive word knowledge quiz. Test your understanding of word meanings, usage in context, and expand your lexicon. Perfect for ESL learners and native speakers looking to enhance their vocabulary range.",
    grammar: "Challenge your understanding of English grammar rules with questions covering tenses, sentence structure, parts of speech, and punctuation. Ideal for students preparing for exams or anyone wanting to perfect their written and spoken English.",
    synonymsAntonyms: "Explore the richness of English by finding words with similar and opposite meanings. This quiz helps develop nuanced language skills and improves your ability to express ideas precisely and vary your word choice in writing and speaking.",
    spelling: "Test your spelling accuracy with commonly misspelled English words. From tricky homophones to complex vocabulary, this quiz helps identify and correct spelling weaknesses while building confidence in written communication.",
    dailyPuzzle: "Engage your mind with fresh daily word puzzles combining vocabulary, spelling, and wordplay. Each day brings new challenges including anagrams, word searches, and cryptic clues to keep your English skills sharp and learning fun."
  };

  return (
    <div className="min-h-screen bg-gradient-game flex flex-col">
      {/* Top Banner Ad */}
      <div className="w-full h-24 bg-muted/50 flex items-center justify-center border-b-2 border-dashed border-border sticky top-0 z-10">
        <span className="text-muted-foreground">Responsive Banner Ad (728x90 / 320x50)</span>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-4">
        {/* Desktop Sidebar Ad */}
        <aside className="hidden lg:block w-64 mr-8">
          <div className="sticky top-32 h-[600px] bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-muted-foreground rotate-90">Sidebar Ad (160x600)</span>
          </div>
        </aside>

        <div className="flex-1 animate-slide-up">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="text-4xl font-bold text-center mb-4 text-gradient">
            Choose Your English Quiz
          </h1>

          {/* Intro Paragraph */}
          <div className="prose prose-lg max-w-3xl mx-auto mb-8 text-center">
            <p className="text-muted-foreground">
              Welcome to the ultimate English learning experience! Our free online English quizzes are designed to help learners at all levels improve their language skills through interactive, timed challenges. Whether you're an ESL student, preparing for exams, or simply want to enhance your English proficiency, our diverse quiz categories cover essential areas of language learning. Each quiz features carefully crafted questions that provide immediate feedback, helping you learn from mistakes and track your progress. With our engaging format and comprehensive coverage of vocabulary, grammar, spelling, and more, you'll find learning English both enjoyable and effective. Start your journey to English mastery today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {quizTypes.map((quiz, index) => {
              const Icon = quiz.icon;
              return (
                <div key={quiz.id}>
                  <button
                    onClick={() => onSelectQuiz(quiz.id)}
                    className="game-card p-6 text-left group hover:scale-105 transition-all w-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${quiz.color} flex items-center justify-center group-hover:animate-pulse-glow flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2">{quiz.name}</h2>
                        <p className="text-sm text-muted-foreground mb-2">{quiz.description}</p>
                        <p className="text-xs text-muted-foreground/80">
                          {quizDescriptions[quiz.id as keyof typeof quizDescriptions]}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Each quiz contains 10 questions with a 10-second timer per question
            </p>
          </div>
          
          {/* Additional Ad Space */}
          <div className="w-full max-w-md mx-auto h-64 bg-muted/50 rounded-lg mt-8 flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-muted-foreground">Square Ad (250x250)</span>
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

export default QuizSelection;