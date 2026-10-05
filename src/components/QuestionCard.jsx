import AnswerOption from "./AnswerOptions";

function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer
}) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="answers">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selectedAnswer={selectedAnswer}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;