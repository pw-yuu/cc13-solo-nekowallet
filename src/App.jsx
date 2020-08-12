import React from 'react';

import Balance from './components/Balance';
import AddForm from './components/AddForm'
import Card from './components/Card';

import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        Neko <span className="heart">❤</span><span className="header-wallet">Wallet</span>
      </header>
      <div className="balance-add-container">
        <Balance />
        <AddForm />
      </div>
      <div className="allcards-container">
      <Card />
      </div>
    </div>
  );
}

export default App;
