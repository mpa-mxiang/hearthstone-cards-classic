import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';

const App = () => {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
      </nav>

      <h1>Hearthstone</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Data />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
