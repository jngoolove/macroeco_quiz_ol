import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, CheckCircle, XCircle, TrendingUp } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults = ({ score, totalQuestions, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGradeInfo = (percentage: number) => {
    if (percentage >= 90) return { grade: "A*", color: "text-success", message: "Outstanding! You have mastered inverse functions!" };
    if (percentage >= 80) return { grade: "A", color: "text-primary", message: "Excellent work! You have a strong understanding of inverse functions." };
    if (percentage >= 70) return { grade: "B", color: "text-warning", message: "Good job! You understand most concepts but could review a few areas." };
    if (percentage >= 60) return { grade: "C", color: "text-muted-foreground", message: "Fair understanding. Consider reviewing the fundamentals of inverse functions." };
    return { grade: "D", color: "text-destructive", message: "Keep practicing! Review the basics and try again." };
  };

  const gradeInfo = getGradeInfo(percentage);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="bg-gradient-to-br from-card to-secondary/20 border-2 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-6xl font-bold ${gradeInfo.color} mb-2`}>
              {gradeInfo.grade}
            </div>
            <div className="text-3xl font-semibold text-foreground mb-2">
              {percentage}%
            </div>
            <p className="text-muted-foreground text-lg">
              {gradeInfo.message}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-2xl font-bold text-success">{score}</span>
              </div>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <XCircle className="w-5 h-5 text-destructive" />
                <span className="text-2xl font-bold text-destructive">{totalQuestions - score}</span>
              </div>
              <p className="text-sm text-muted-foreground">Incorrect</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">{totalQuestions}</span>
              </div>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>
          </div>

          <Button 
            onClick={onRestart} 
            variant="default" 
            size="lg" 
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResults;