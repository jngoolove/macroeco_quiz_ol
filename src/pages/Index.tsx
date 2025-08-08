import { useState } from "react";
import QuizCard, { Question } from "@/components/QuizCard";
import QuizHeader from "@/components/QuizHeader";
import QuizResults from "@/components/QuizResults";
import { inverseFunctionsQuiz } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = inverseFunctionsQuiz[currentQuestionIndex];
  const isAnswered = currentQuestion?.id in answers;

  const handleAnswer = (questionId: number, selectedAnswer: number, isCorrect: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedAnswer }));
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < inverseFunctionsQuiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const handleStart = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Inverse Functions Quiz
            </h1>
            <p className="text-xl text-muted-foreground mb-2">A-Level Mathematics</p>
            <p className="text-muted-foreground">
              Test your understanding of inverse functions with {inverseFunctionsQuiz.length} challenging questions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-secondary/20 rounded-lg p-8 border-2 shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">What you'll be tested on:</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Definition and properties of inverse functions</li>
              <li>• Finding inverse functions algebraically</li>
              <li>• Domain and range of inverse functions</li>
              <li>• Graphical relationships between functions and their inverses</li>
              <li>• Composition of functions and their inverses</li>
            </ul>
          </div>

          <Button 
            onClick={handleStart} 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200 px-8 py-6 text-lg"
          >
            <Play className="w-6 h-6 mr-2" />
            Start Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <QuizResults
          score={score}
          totalQuestions={inverseFunctionsQuiz.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <QuizHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={inverseFunctionsQuiz.length}
        score={score}
        title="Inverse Functions Quiz"
      />
      
      <div className="max-w-4xl mx-auto">
        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={isAnswered}
          selectedAnswer={answers[currentQuestion.id] ?? null}
        />
        
        {isAnswered && (
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleNext} 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200"
            >
              {currentQuestionIndex < inverseFunctionsQuiz.length - 1 ? 'Next Question' : 'Show Results'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
