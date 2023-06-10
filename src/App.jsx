import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './featurse/Counter/Counter'
import Todo from './featurse/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <br/>
      <Todo/>
    </>
  )
}

export default App
