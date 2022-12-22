import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './hooks/redux_hooks';
import { gameActions } from './store';

function App() {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const currentScores = useAppSelector((state) => state.game.scores);
  const dispatch = useAppDispatch();
  return (
    <div className='App'>
      <h1>{currentPlayer}</h1>
    </div>
  );
}

export default App;
