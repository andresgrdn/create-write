import React, { useState } from 'react';
import './reset.css';
import './App.css';

function App() {
  const [pText, setPtext] = useState('')

  function handleWriting(event) {
    const keyPressed = event.key
    setPtext(pText + keyPressed)
  }

  return (
    <div className="App">
      <i className='App__icon'></i>
      <div onKeyDown={handleWriting} tabIndex={0} className="App__Text debug">
        <p className="debug" >{pText}</p>
      </div>
    </div>
  );
}

export default App;
