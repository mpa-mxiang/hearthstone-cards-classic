import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCards } from '../redux/cardSlice';

const CardData = () => {
  const { cardId } = useParams();
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
    <div className="flex flex-col items-center justify-center m-auto">
      <img src={card.img} alt="cardImg" />
      <h2 className="text-slate-100 font-bold font-serif text-2xl">{card.name}</h2>
      <p className="text-orange-200 text-xl">
        •Type:
        <span className="text-slate-100">{card.type}</span>
      </p>
      <p className="text-orange-200 text-xl">
        •Player Class:
        <span className="text-slate-100">{card.playerClass}</span>
      </p>
      <p className="text-orange-200 text-xl">
        •Rarity:
        <span className="text-slate-100">{card.rarity}</span>
      </p>
    </div>
  );
};

export default CardData;
