function AnswerOption({ option, selectedAnswer, onSelect }) {
  const isSelected = selectedAnswer === option;

  return (
    <button
      className={`answer-option ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
}

export default AnswerOption;