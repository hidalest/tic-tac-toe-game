import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const player = useSelector((state: number) => {
    if (state.currentPlayer !== 'number') {
      console.log('error');
    }

    return state.currentPlayer;
  });
  return <div className='App'></div>;
}

export default App;
