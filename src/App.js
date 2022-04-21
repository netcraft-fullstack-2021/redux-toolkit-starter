import React from 'react'
import './App.css';

export function App() {

  return (
    <div>
      <div>
        <button
          onClick={() => console.log('Increment')}
          >
          Increment
        </button>
        <span className='value'>count</span>
        <button
          onClick={() => console.log('Decrement')}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;