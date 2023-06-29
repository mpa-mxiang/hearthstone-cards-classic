import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';

const App = () => {
  return (
    <Router>
    <div className="bg-amber-400">
      <h1 className="text-center text-6xl font-sans">Hearthstone</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:cardId" element={<Data />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
