import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/questions').then(r=>r.json())
    .then((questionsData)=>setQuestions(questionsData))
  }, [])

  const handleNewQuestionForm = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const handleQuestionDelete = (questionToDelete) => {
    const newQuestionList = questions.filter((question)=>question.id!==questionToDelete.id)
    setQuestions(newQuestionList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestionSubmit={handleNewQuestionForm}/> : 
      <QuestionList  questions={questions} onQuestionDelete={handleQuestionDelete} />}
    </main>
  );
}

export default App;
