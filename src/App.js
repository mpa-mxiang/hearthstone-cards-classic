import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';

const App = () => {
  return (
    <Router>
    <div>
      <h1 className="text-center text-6xl">Hearthstone</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:cardId" element={<Data />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
