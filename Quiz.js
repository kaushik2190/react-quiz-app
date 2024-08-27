import React, { useState } from "react";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is React?",
      options: ["CSS", "React library", "Framework", "Tool"],
      answer: "React library",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    // Add more questions as needed
  ];

  // Method to update score
  const updateScore = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  // Handler for moving to the next question
  const handleNextQuestion = () => {
    // Update the score before moving to the next question
    updateScore();

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(""); // Reset selected option for next question
    } else {
      setShowResult(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-container">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
