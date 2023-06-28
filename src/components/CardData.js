import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cardSlice';

const CardData = ({ match }) => {
  const { cardId } = match.params;
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const card = cards.find((card) => card.cardId === cardId);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Card Details</h1>
      <h2>Name: {card.name}</h2>
      <p>Type: {card.type}</p>
      <p>Player Class: {card.playerClass}</p>
      <p>Rarity: {card.rarity}</p>
    </div>
  );
};

export default CardData;
