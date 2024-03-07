
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const questions = [
    {
  question: "How do you declare an object in JavaScript?",
  options: [
    "object myObject = { key: value };",
    "const myObject = { key: value };",
    "myObject = { key: value };",
    "None of the above"
  ],
  correctOption: "const myObject = { key: value };"
},
{
  question: "How do you access the value of a property in an object?",
  options: [
    "objectName.property",
    "objectName['property']",
    "Both of the above",
    "None of the above"
  ],
  correctOption: "Both of the above"
},
{
  question: "What is the difference between an array and an object?",
  options: [
    "They are the same.",
    "Arrays can only store numbers, objects can store any data type.",
    "Arrays have ordered indexes, objects have named properties.",
    "None of the above"
  ],
  correctOption: "Arrays have ordered indexes, objects have named properties."
}
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  const handleNextClick = () => {
    if (selectedOption === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div className='container'>
          <div className='quiz-container'>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <hr />
          
          <label className="question_title form-control" htmlFor="" >{currentQuestion.question}</label>
          
          <h6 className='option_list'>
          
            {currentQuestion.options.map((option, index) => {
              return(
              <h4 key={index}>
                <label  className='form-control mt-4 mr-6'>
                  <input
                    
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />{option}
                  
                </label>
              </h4>
       ) })}
          </h6>
          <button className='btn btn-warning' onClick={handleNextClick}>Next</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="result_window">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {questions.length}</p>
          <h4>Happy Learning !</h4>
         
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
