import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Balance from './components/Balance';
import AddForm from './components/AddForm'
import Card from './components/Card';

import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        ❤
      </header>
      
      <Balance />
      <AddForm />
      <Card />
    </div>
  );
}

export default App;
