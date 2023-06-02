// Library imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component imports
import Home from './pages/Home';

// CSS imports
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
