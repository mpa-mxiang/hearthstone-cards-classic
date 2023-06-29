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
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 justify-center sm:gap-3 px-3 pr-3 mb-8">
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
    <div className="flex flex-col items-center sm:flex-row justify-center m-auto">
      <label htmlFor="search" className="font-serif text-3xl font-bold">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="n-range:border-green-500 block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default CardList;
