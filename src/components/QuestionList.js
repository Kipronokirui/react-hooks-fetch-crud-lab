import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionsList, setQuestionsList] = useState([])
  useEffect(() => {
    console.log('UseEffect works')
    fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(data => setQuestionsList(data))
  }, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questionsList?.map((question, index) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
