import React from 'react';
import Hello from './Hello';
import './App.css'

function App() {
  const name = 'Hong';
  const style = {
    backgroundColor:'black',
    color:'red',
    fontSize:'24',
    padding:'1rem'
  };

  return (
    <>
      <Hello />
      <div>안녕히계세요.</div>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  )
}

export default App;