import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';
import Hearthstone from './img/pngegg.png';

const App = () => {
  return (
    <Router>
      <div className="bg-yellow-700 m-auto">
        <div className="flex flex-row items-center justify-center m-auto">
          <img src={Hearthstone} alt="icon" className="snap-center w-20" />
          <h1 className="font-serif text-7xl font-bold">Hearthstone</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data/:cardId" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
