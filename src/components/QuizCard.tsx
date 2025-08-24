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
  image?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
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
        {question.image && (
          <div className="mt-4 flex justify-center">
            <img 
              src={question.image} 
              alt="Question diagram" 
              className="max-w-full h-auto rounded-lg border shadow-sm"
              style={{ maxWidth: '500px' }}
              onLoad={() => {
                console.log('Image loaded successfully:', question.image);
              }}
              onError={(e) => {
                console.error('Image failed to load:', question.image);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        {question.table && (
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {question.table.headers.map((header, index) => (
                      <th key={index} className="border border-gray-300 px-3 py-2 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-3 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={getOptionVariant(index)}
              className="w-full justify-start text-left p-4 text-sm font-medium transition-all duration-200 hover:scale-[1.01] h-auto min-h-[60px]"
              onClick={() => handleAnswerClick(index)}
              disabled={answered}
            >
              <div className="flex items-start gap-3 w-full">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-sm font-bold mt-0.5">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-left leading-relaxed break-words whitespace-normal overflow-wrap-anywhere hyphens-auto py-0.5">
                  {option}
                </span>
                {answered && index === question.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-success-foreground flex-shrink-0 mt-0.5" />
                )}
                {answered && index === selectedAnswer && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-destructive-foreground flex-shrink-0 mt-0.5" />
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