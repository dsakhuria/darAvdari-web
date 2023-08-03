import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div 
    className='w-full h-screen
              bg-neutral-900'>
      <span>Hello;</span>
    </div> 
    </>
  )
}

export default App
