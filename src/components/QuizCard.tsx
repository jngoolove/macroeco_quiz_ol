import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
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
  onAnswer: (questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  answered: boolean;
  selectedAnswer: number | null;
}

const QuizCard = ({ question, onAnswer, answered, selectedAnswer }: QuizCardProps) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (optionIndex: number) => {
    if (answered) return;
    
    const isCorrect = optionIndex === question.correctAnswer;
    onAnswer(question.id, optionIndex, isCorrect);
    setShowExplanation(true);
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
        <CardTitle className="text-xl font-semibold text-foreground leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
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