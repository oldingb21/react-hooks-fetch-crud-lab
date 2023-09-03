import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onQuestionDelete}) {

  const questionsToDisplay = questions.map((question)=>{
    return (
      <div key={question.id}>
        <QuestionItem question={question} onQuestionDelete={onQuestionDelete}/>  
      </div>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsToDisplay}
      </ul>
    </section>
  );
}

export default QuestionList;
