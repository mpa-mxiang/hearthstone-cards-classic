import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cardSlice';

const CardList = () => {
  const cards = useSelector((state) => state.cards.cards);
  const status = useSelector((state) => state.cards.status);
  const error = useSelector((state) => state.cards.error);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCards());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hearthstone Cards</h1>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {filteredCards.map((card) => (
          <li key={card.cardId}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Filter = ({ searchTerm, setSearchTerm }) => {
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default CardList;
