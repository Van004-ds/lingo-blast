import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of English quizzes are available?",
      answer: "We offer 5 types of English quizzes: Vocabulary Quiz, Grammar Quiz, Synonyms & Antonyms, Guess the Spelling, and Daily Word Puzzle. Each quiz contains 10 questions with a 10-second timer per question."
    },
    {
      question: "Are these English quizzes suitable for ESL learners?",
      answer: "Yes! Our English quizzes are perfect for ESL learners of all levels. The timed challenges help improve response speed while the variety of quiz types covers essential language skills from vocabulary to grammar."
    },
    {
      question: "How can these quizzes help improve my English?",
      answer: "Regular practice with our English quizzes helps expand vocabulary, reinforce grammar rules, improve spelling accuracy, and build confidence in using English. The immediate feedback shows correct answers to help you learn from mistakes."
    },
    {
      question: "Is the English Quiz Challenge free to play?",
      answer: "Yes, all our English quizzes are completely free to play. You can take as many quizzes as you want without any cost or registration required."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-card rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
        Frequently Asked Questions
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;