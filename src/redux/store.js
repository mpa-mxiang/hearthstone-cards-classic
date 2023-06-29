import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
