import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  try {
    const response = await axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', {
      headers: {
        'x-rapidapi-key': 'a813b599aamsh4de48209de349c1p163491jsnfbdd9231636d',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const nice = action.payload;
        const temp = nice.map((card)=>({
            id: card.dbfId,
            cardName: card.name,
        }));
        console.log(temp);
        //state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
