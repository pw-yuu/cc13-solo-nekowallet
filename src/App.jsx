import React, { useState } from 'react';


import Balance from './components/Balance';
import AddForm from './components/AddForm'
import Card from './components/Card';

import './App.css';



function App() {

  const [drag, setDrag] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  })

  let ref = React.createRef()

  return (
    <div className="App">
      <header className="App-header">
        Neko <span className="heart">❤</span><span className="header-wallet">Wallet</span>
      </header>
      <div className="balance-add-container">
        <Balance />
        <AddForm />
      </div>
      <div
        className="allcards-container"
        onMouseDown={(e) => {
          setDrag({
            ...drag,
            isScrolling: true, 
            clientX: e.clientX }
          )
        }}
      >
        <Card />
      </div>
    </div>
  );
}

export default App;
