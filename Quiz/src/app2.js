import React from 'react'

export default function app2() {

    let currentQuestionIndex=0;
    let currentQuestion=questions[0];
    const questions = [
        {
          question: 'What is the capital of France?',
          options: ['London', 'Paris', 'Berlin', 'Madrid'],
          correctOption: 'Paris',
        },
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctOption: '4',
        },
        {
          question: 'Who wrote "To Kill a Mockingbird"?',
          options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Stephen King'],
          correctOption: 'Harper Lee',
        },
      ];
  return (
    <div>
      {currentQuestionIndex<questions.length ? (
            <div>
                <h4>Question {currentQuestionIndex +1 }</h4>
                <h3>{currentQuestion.question}</h3>
                <ul >
                    {currentQuestion.options.map((option,index)=>(
                        <li key={index}>
                            <label>
                                <input type="radio" name='options' value={option} checked={selectedOption===option}
                                onChange={()=>handleOptionSelect(option)} />
                                {option}
                            </label>
                        </li>
        ))}
                </ul>
            </div>
      
      
      
      ):()}

    </div>
  );
}

