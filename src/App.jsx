import React from 'react';
import Button from './sass/Button';
import './App.scss';


function App() {
  return (
    <div className='App'>
      <div className='Buttons'>
        <Button size='large'>BUTTON</Button>
        <Button >BUTTON</Button>
        <Button size='small'>BUTTON</Button>
      </div>
      <div className='Buttons'>
        <Button color='gray' size='large'>BUTTON</Button>
        <Button color='gray' >BUTTON</Button>
        <Button color='gray' size='small'>BUTTON</Button>
      </div>
      <div className='Buttons'>
        <Button color='pink' size='large'>BUTTON</Button>
        <Button color='pink' >BUTTON</Button>
        <Button color='pink' size='small'>BUTTON</Button>
      </div>
      <div className='Buttons'>
        <Button outline size='large'>BUTTON</Button>
        <Button outline color='gray' >BUTTON</Button>
        <Button outline color='pink' size='small'>BUTTON</Button>
      </div>
      <div className='Buttons'>
        <Button fullWidth size='large'>BUTTON</Button>
        <Button fullWidth color='gray' >BUTTON</Button>
        <Button
          onMouseMove={() => { console.log('hello') }}
          onClick={() => { console.log('hi') }}
          fullWidth color='pink' size='small'>BUTTON</Button>
      </div>
    </div>
  )
}

export default App;
