import React, { useState } from "react";
import { questions } from "./dummyQuestions";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: option,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleNextClick = () => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: message,
    }));
    setMessage(""); // Reset the message for the next use
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="w-100 ">
        <h3 className="text-center">Help us match the best Therapist</h3>
      </div>
      <div className="d-flex w-100 justify-content-center">
        <h6 className="w-50">
          It is important to have a therapist who can establish a personal
          connection with. The following are designed to help match you a
          licensed therapist based on your needs and personal preferences.
        </h6>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <div
          className="bg-white w-50"
          style={{
            borderRadius: "8px",
          }}
        >
          <div className="p-4">
            <h3 className="text-center">{currentQuestion.question}</h3>
            <div className="my-4">
              {currentQuestion.options[0].option !== "message-box" ? (
                currentQuestion.options.map((optionItem) => (
                  <div
                    key={optionItem.option}
                    onClick={() => handleOptionClick(optionItem.option)}
                    className="bg-success p-2 my-2"
                    style={{ borderRadius: "8px", cursor: "pointer" }}
                  >
                    {optionItem.option}
                  </div>
                ))
              ) : (
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe briefly"
                    className="w-100 p-2"
                    style={{ borderRadius: "8px" }}
                  />
                  <button
                    onClick={handleNextClick}
                    className="bg-success p-2 my-2"
                    style={{ borderRadius: "8px", cursor: "pointer" }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() =>
                  setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
                }
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (questions.length - 1 === currentQuestionIndex) {
                    navigate("/register");
                  } else if (currentQuestion.options[0].option !== "message-box") {
                    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
