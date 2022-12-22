import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialGameStateInterface {
  currentPlayer: 0 | 1;
  scores: number[][];
}

const initialState: InitialGameStateInterface = {
  currentPlayer: 0,
  scores: [[], []],
};

const gameStoreSlice = createSlice({
  name: 'gameStore',
  initialState,
  reducers: {
    togglePlayer(state: InitialGameStateInterface) {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },

    addBoxSelection(state, action: PayloadAction<number>) {
      state.scores[state.currentPlayer].push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    game: gameStoreSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const gameActions = gameStoreSlice.actions;

export default store;
