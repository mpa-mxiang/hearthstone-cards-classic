import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import { fetchCards } from '../redux/cardSlice';
import Data from '../pages/Data';

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
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!cards) {
    return <div>No cards available.</div>;
  }
  const filteredCards = cards.filter(
    (card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 justify-center sm:gap-3 px-3 pr-3 mb-8">
        {filteredCards.map((card) => (
          <Link src={Data} to={`/data/${card.cardId}`} key={card.cardId}>
            <img src={card.img} alt="cardImg" />
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
    <div className="flex justify-center m-auto">
      <label id="search-input" htmlFor="search" className="font-serif text-3xl font-bold">
        Search:
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="n-range:border-gray-500 block p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default CardList;
