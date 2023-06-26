import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardData = ({ match }) => {
  const [card, setCard] = useState(null);
  const { cardId } = match.params;

  useEffect(() => {
    fetchCard();
  });

  const fetchCard = async () => {
    try {
      const response = await axios.get(
        `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardId}`,
        {
          headers: {
            'x-rapidapi-key': 'YOUR_API_KEY',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
          }
        }
      );
      setCard(response.data[0]);
    } catch (error) {
      console.error('Error fetching card:', error);
    }
  };

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
