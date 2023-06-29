import React from 'react';
import CardData from '../components/CardData';
import { Link } from 'react-router-dom';

const Data = ({ match }) => {
  return (
    <div className="bg-black">
      <span className="text-slate-100 text-6xl ml-5"><Link to="/">⬅</Link></span>
      <CardData match={match} />
    </div>
  );
};

export default Data;
