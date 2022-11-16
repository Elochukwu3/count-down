import { useState } from 'react'
import Timer from './timer-function/Timer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Timer/>
     </div>
  )
}

export default App
