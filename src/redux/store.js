import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../redux/cardSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;