import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Send } from "lucide-react";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  sourceInfo?: {
    questionType?: string;
    difficulty?: number;
    sourceId: number;
  };
}

export interface DatabaseQuestion {
  id: number;
  content_md: string;
  content_plain: string;
  difficulty?: number;
  question_type?: string;
}

interface QuizCardProps {
  question: Question;
  onAnswer: (questionId: number, selectedAnswer: number | string, isCorrect: boolean) => void;
  answered: boolean;
  selectedAnswer: number | string | null;
  sourceInfo?: {
    questionType?: string;
    difficulty?: number;
    sourceId: number;
  };
}

const QuizCard = ({ question, onAnswer, answered, selectedAnswer, sourceInfo }: QuizCardProps) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [inputAnswer, setInputAnswer] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isStructuredQuestion = sourceInfo?.questionType === "structured";

  const handleAnswerClick = (optionIndex: number) => {
    if (answered || isStructuredQuestion) return;
    
    const isCorrect = optionIndex === question.correctAnswer;
    onAnswer(question.id, optionIndex, isCorrect);
    setShowExplanation(true);
  };

  const handleInputSubmit = () => {
    if (answered || !inputAnswer.trim()) return;
    
    setHasSubmitted(true);
    // For structured questions, we'll mark as correct if they provide any answer
    const isCorrect = inputAnswer.trim().length > 0;
    onAnswer(question.id, inputAnswer.trim(), isCorrect);
    setShowExplanation(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInputSubmit();
    }
  };

  const getOptionVariant = (optionIndex: number) => {
    if (!answered) return "outline";
    if (optionIndex === question.correctAnswer) return "success";
    if (optionIndex === selectedAnswer && optionIndex !== question.correctAnswer) return "destructive";
    return "outline";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-card to-secondary/20 border-2 shadow-lg">
      <CardHeader className="pb-4">
        {sourceInfo && (
          <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-muted rounded">ID: {sourceInfo.sourceId}</span>
            {sourceInfo.questionType && (
              <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                {sourceInfo.questionType}
              </span>
            )}
            {sourceInfo.difficulty && (
              <span className="px-2 py-1 bg-secondary rounded">
                Difficulty: {sourceInfo.difficulty}
              </span>
            )}
            <span className="px-2 py-1 bg-accent/10 text-accent-foreground rounded">
              Database Question
            </span>
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-foreground leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isStructuredQuestion ? (
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Your Answer:
              </label>
              <div className="flex gap-2">
                <Input
                  value={inputAnswer}
                  onChange={(e) => setInputAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your answer here..."
                  disabled={answered}
                  className="flex-1"
                />
                <Button
                  onClick={handleInputSubmit}
                  disabled={answered || !inputAnswer.trim()}
                  variant="default"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {answered && (
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success-foreground" />
                  <span className="text-foreground">
                    Your answer: <span className="font-mono">{selectedAnswer}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={getOptionVariant(index)}
                className="justify-start text-left h-auto py-4 px-6 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
                onClick={() => handleAnswerClick(index)}
                disabled={answered}
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 font-mono text-sm">{option}</span>
                  {answered && index === question.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-success-foreground" />
                  )}
                  {answered && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-destructive-foreground" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        )}
        
        {showExplanation && answered && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">EXPLANATION</h4>
            <p className="text-sm text-foreground leading-relaxed">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizCard;