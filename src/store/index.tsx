import { configureStore, createSlice } from '@reduxjs/toolkit';

interface initialGameStateInterface {
  currentPlayer: 0 | 1;
  scores: any[];
}

const initialState: initialGameStateInterface = {
  currentPlayer: 0,
  scores: [[], []],
};

const gameStoreSlice = createSlice({
  name: 'gameStore',
  initialState,
  reducers: {
    togglePlayer(state) {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },
  },
});

const store = configureStore({
  reducer: {
    game: gameStoreSlice.reducer,
  },
});

export const gameActions = gameStoreSlice.actions;

export default store;
