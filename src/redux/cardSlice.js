import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  try {
    const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic', {
      headers: {
        'x-rapidapi-key': 'a813b599aamsh4de48209de349c1p163491jsnfbdd9231636d',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }

    const data = await response.json();

    // Filter out items without the "img" key
    const filteredCards = data.filter((card) => card.hasOwnProperty('img'));

    // Remove duplicates based on name and keep the one with the most keys
    const uniqueCards = [];
    const cardNames = new Set();
    for (const card of filteredCards) {
      if (!cardNames.has(card.name)) {
        cardNames.add(card.name);
        uniqueCards.push(card);
      } else {
        const existingCardIndex = uniqueCards.findIndex((c) => c.name === card.name);
        if (Object.keys(card).length > Object.keys(uniqueCards[existingCardIndex]).length) {
          uniqueCards[existingCardIndex] = card;
        }
      }
    }

    return uniqueCards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: null,
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
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
