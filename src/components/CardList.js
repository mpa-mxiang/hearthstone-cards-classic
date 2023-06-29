import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cardSlice';
import Data from '../pages/Data';
import { Link } from 'react-router-dom';

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

  if (!cards) {
    return <div>No cards available.</div>;
  }
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>

        {filteredCards.map((card) => (

          <Link to={`/data/${card.cardId}`} key={card.cardId}>
            <img src={card.img} onClick={Data} alt="cardImg" />
          </Link>
        ))}
      </div>
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
