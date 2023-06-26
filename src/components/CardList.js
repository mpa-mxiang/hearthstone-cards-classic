import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
        {
          headers: {
            'x-rapidapi-key': 'a813b599aamsh4de48209de349c1p163491jsnfbdd9231636d',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
          }
        }
      );
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hearthstone Cards</h1>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      <ul>
        {filteredCards.map((card) => (
          <li key={card.cardId}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
