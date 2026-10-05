import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const totalQuestions =
    location.state?.totalQuestions || 10;

  const incorrectAnswers = totalQuestions - score;

  const percentage = Math.round(
    (score / totalQuestions) * 100
  );

  const handleRetake = () => {
    navigate("/quiz");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="page result-page">
      <ResultCard
        totalQuestions={totalQuestions}
        correctAnswers={score}
        incorrectAnswers={incorrectAnswers}
        score={score}
        percentage={percentage}
        onRetake={handleRetake}
        onHome={handleHome}
      />
    </div>
  );
}

export default Result;