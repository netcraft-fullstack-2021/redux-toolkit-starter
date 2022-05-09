import React from 'react'
import './App.css';

export function App() {

  return (
    <div>
      <div>
        <button
          onClick={() => console.log('Increment')}
          >
          Really Increment
        </button>
        <span className='value'>count</span>
        <button
          onClick={() => console.log('Decrement')}
        >
          Really Decrement
        </button>
      </div>
    </div>
  )
}

export default App;