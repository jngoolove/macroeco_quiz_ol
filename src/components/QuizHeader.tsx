import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Brain } from "lucide-react";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  title: string;
}

const QuizHeader = ({ currentQuestion, totalQuestions, score, title }: QuizHeaderProps) => {
  const progress = ((currentQuestion - 1) / totalQuestions) * 100;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Brain className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
        <p className="text-muted-foreground">A-Level Mathematics</p>
      </div>

      <Card className="bg-gradient-to-r from-card to-secondary/10 border-2">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Question</p>
                <p className="font-semibold text-lg">
                  {currentQuestion} of {totalQuestions}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Score</p>
                <p className="font-semibold text-lg">
                  {score}/{totalQuestions}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs text-primary-foreground font-bold">%</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="font-semibold text-lg">{percentage}%</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizHeader;