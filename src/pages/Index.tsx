import { useState } from "react";
import QuizCard, { Question } from "@/components/QuizCard";
import QuizHeader from "@/components/QuizHeader";
import QuizResults from "@/components/QuizResults";
import { getAllQuestions, generateRandomQuiz } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Play, ChevronLeft, ChevronRight, Shuffle, List } from "lucide-react";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(getAllQuestions());

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isAnswered = currentQuestion?.id in answers;

  const handleAnswer = (questionId: number, selectedAnswer: number, isCorrect: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedAnswer }));
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    // Reset quiz questions based on current mode
    setQuizQuestions(isRandomMode ? generateRandomQuiz() : getAllQuestions());
  };

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleModeChange = (checked: boolean) => {
    setIsRandomMode(checked);
    setQuizQuestions(checked ? generateRandomQuiz() : getAllQuestions());
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Company Logo */}
          <div className="mb-6">
            <img 
              src="./logos/logo-color.png" 
              alt="Company Logo" 
              className="mx-auto h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback to other logos if primary fails
                e.currentTarget.src = "./logos/logo-white-1.png";
              }}
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Macroeconomics Quiz
            </h1>
            <p className="text-xl text-muted-foreground mb-2">AP Macroeconomics</p>
            <p className="text-muted-foreground">
              Test your understanding of macroeconomic principles with {quizQuestions.length} challenging questions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-secondary/20 rounded-lg p-8 border-2 shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">What you'll be tested on:</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Supply and demand analysis</li>
              <li>• GDP, inflation, and economic indicators</li>
              <li>• Monetary and fiscal policy</li>
              <li>• International trade and exchange rates</li>
              <li>• Business cycles and economic growth</li>
            </ul>
          </div>

          {/* Quiz Mode Switch */}
          <div className="bg-gradient-to-br from-card to-secondary/20 rounded-lg p-6 border-2 shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <List className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Quiz Mode</p>
                  <p className="text-sm text-muted-foreground">
                    {isRandomMode ? "Random 15 questions" : "All 60 questions (sequential)"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Sequential</span>
                <Switch
                  checked={isRandomMode}
                  onCheckedChange={handleModeChange}
                />
                <span className="text-sm font-medium">Random</span>
                <Shuffle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleStart} 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200 px-8 py-6 text-lg"
          >
            <Play className="w-6 h-6 mr-2" />
            Start Quiz ({quizQuestions.length} questions)
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
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <QuizHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        score={score}
        title="Macroeconomics Quiz"
      />
      
      <div className="max-w-4xl mx-auto">
        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={isAnswered}
          selectedAnswer={answers[currentQuestion.id] ?? null}
        />
        
        <div className="flex justify-between items-center mt-6">
          <Button 
            onClick={handlePrevious} 
            variant="outline"
            size="lg"
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          {isAnswered && (
            <Button 
              onClick={handleNext} 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200 flex items-center gap-2"
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Show Results'}
              {currentQuestionIndex < quizQuestions.length - 1 && <ChevronRight className="w-4 h-4" />}
            </Button>
          )}
          
          {!isAnswered && (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
