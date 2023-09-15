import React, {useState} from "react";

function QuestionItem({ question, onQuestionDelete }) {
  const { id, prompt, answers, correctIndex } = question;
  const [deleting, setDeleting] = useState(false);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = () => {
    setDeleting(true)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then(()=>{
      setDeleting(false)
      onQuestionDelete(question)})
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex : e.target.value
      })
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
      {deleting ? <p>Item is being deleted</p> : <></>}
    </li>
  );
}

export default QuestionItem;
