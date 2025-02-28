import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Movies from './components/Movies'

function App() {
  const [count, setCount] = useState(0)

  const initialCount = 0;

  return (
    <>
      <Counter
        initialCount={initialCount}
      />

      <hr />
      <><Movies></Movies></>
    </>
  )
}

export default App
