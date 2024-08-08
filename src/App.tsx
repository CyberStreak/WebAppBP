import { useState } from 'react'
import {Result, ResultType} from './Result.tsx'
import './App.css'
import {Options} from "./Option.tsx";
import ImageElement from "./ImageElement.tsx";

function App() {
  const [result, setResult] = useState<ResultType>('pending');

  const handleSelection = (answer: boolean) => {
      setResult(answer ? 'correct' : 'wrong');
  };

  return (
      <div>
          <h1>Drei Dinge über Milan:</h1>
          <div className={"buttons"}>
              <Options onSelect={handleSelection}/>
              <Result result={result}/>
          </div>
          <ImageElement/>
      </div>
  )
}

export default App