import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    let newScore = score;

    if (selectedAnswer === question.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (currentQuestion === questions.length - 1) {
      navigate("/result", {
        state: {
          score: newScore,
          totalQuestions: questions.length
        }
      });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  return (
    <div className="page quiz-page">
      <div className="quiz-container">

        <QuizHeader
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
        />

        <button
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;