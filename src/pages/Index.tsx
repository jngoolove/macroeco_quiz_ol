import { useState, useEffect } from "react";
import QuizCard, { Question, DatabaseQuestion } from "@/components/QuizCard";
import QuizHeader from "@/components/QuizHeader";
import QuizResults from "@/components/QuizResults";
import { Button } from "@/components/ui/button";
import { Play, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number | string }>({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = currentQuestion?.id in answers;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const { data: dbQuestions, error } = await supabase
          .from('question')
          .select('id, content_md, content_plain, difficulty, question_type')
          .limit(10);
        
        if (error) throw error;
        
        // Convert database questions to quiz format
        const convertedQuestions: Question[] = dbQuestions?.map((q, index) => ({
          id: q.id,
          question: q.content_plain || q.content_md || "Question content not available",
          options: q.question_type === "structured" ? [] : [
            "Option A - Click to continue",
            "Option B - This is a practice question", 
            "Option C - View the question content",
            "Option D - Proceed to next question"
          ],
          correctAnswer: 0, // First option is always correct for non-structured questions
          explanation: q.question_type === "structured" 
            ? "This is a structured question from the database. Review your answer and the question content."
            : "This is a real question from the database. In a full implementation, you would see the complete solution and answer.",
          sourceInfo: {
            questionType: q.question_type,
            difficulty: q.difficulty,
            sourceId: q.id
          }
        })) || [];
        
        setQuestions(convertedQuestions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (questionId: number, selectedAnswer: number | string, isCorrect: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedAnswer }));
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading questions from database...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading questions: {error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mathematics Quiz
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Real Questions from Database</p>
            <p className="text-muted-foreground">
              Practice with {questions.length} real mathematics questions from our question bank.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-secondary/20 rounded-lg p-8 border-2 shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">About these questions:</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Real questions from our mathematics database</li>
              <li>• Various topics including algebra, calculus, and more</li>
              <li>• Different difficulty levels and question types</li>
              <li>• Practice with authentic mathematical problems</li>
              <li>• Click any option to view the next question</li>
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
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <QuizHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        score={score}
        title="Mathematics Quiz"
      />
      
      <div className="max-w-4xl mx-auto">
        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={isAnswered}
          selectedAnswer={answers[currentQuestion.id] ?? null}
          sourceInfo={currentQuestion.sourceInfo}
        />
        
        {isAnswered && (
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleNext} 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Show Results'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
