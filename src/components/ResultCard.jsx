function ResultCard({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  score,
  percentage,
  onRetake,
  onHome
}) {
  return (
    <div className="result-card">
      <h1>Quiz Completed!</h1>

      <div className="score">
        <h2>{score} / {totalQuestions}</h2>
        <p>{percentage}%</p>
      </div>

      <div className="result-details">
        <p>
          Total Questions: <strong>{totalQuestions}</strong>
        </p>

        <p>
          Correct Answers: <strong>{correctAnswers}</strong>
        </p>

        <p>
          Incorrect Answers: <strong>{incorrectAnswers}</strong>
        </p>
      </div>

      <div className="result-buttons">
        <button onClick={onRetake}>
          Retake Quiz
        </button>

        <button onClick={onHome}>
          Return Home
        </button>
      </div>
    </div>
  );
}

export default ResultCard;