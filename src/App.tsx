import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path='/' />
          <Route element={<Projects />} path='/projects' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
