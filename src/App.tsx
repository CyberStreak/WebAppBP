import './App.css'
import { Hello } from "./Hello.tsx"

function App() {
  return (
      <div>
        <Hello name={'React'} />
        <Hello name={"World"} />
        <Hello name={"Everyone"} />
      </div>
  )
}

export default App