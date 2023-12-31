import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Hearthstone from './img/pngegg.png';

const App = () => (
  <Router>
    <div className="bg-yellow-700 m-auto sm:w-full">
      <div className="flex flex-row items-center justify-center m-auto">
        <img src={Hearthstone} alt="icon" className="snap-center w-20" />
        <h1 className="font-serif text-lg font-bold sm:text-2xl">Hearthstone</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
