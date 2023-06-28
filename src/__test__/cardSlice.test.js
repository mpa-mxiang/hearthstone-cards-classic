import cardsReducer, { fetchCards } from '../redux//cardSlice';

test('cards reducer test for pending', () => {
  let state = null;
  state = cardsReducer(undefined, fetchCards.pending());
  expect(state.status).toBe('loading');
});

test('cards reducer test for fullfilled', () => {
    let state = null;
    state = cardsReducer(undefined, fetchCards.fullfilled());
    expect(state.status).toBe('succeeded');
  });

  test('cards reducer test for rejected', () => {
    let state = null;
    state = cardsReducer(undefined, fetchCards.rejected());
    expect(state.status).toBe('failed');
  });