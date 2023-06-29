import React from 'react';
import { Link } from 'react-router-dom';
import CardData from '../components/CardData';

const Data = ({ match }) => (
  <div className="bg-gradient-to-r from-black from-30%">
    <span className="text-slate-100 text-6xl ml-5"><Link to="/">⬅</Link></span>
    <CardData match={match} />
  </div>
);

export default Data;
