
import { useState } from 'react';
import SingleQuestion from './components/Question';
import Data from './components/Data'
import questions from './components/Data';

function App() {

  const [question, setQuestions] = useState(Data);

  return (
    <div className="container">
        <h3>سوالات متداول</h3>
        <div className="info">
          {
            questions.map((question , index) => {   //here u get all objects from data.js and index of each one because u need a unique key for map method
              return <SingleQuestion key={index} {...question} />
            })
          }

        </div>
    </div>
  );
}

export default App;
