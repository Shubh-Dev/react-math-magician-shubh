import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as router, Routes, Route, Link,
// } from 'react-router-dom';
import Calculator from './components/Calculator';
import Homepage from './pages/Home';
import Header from './pages/Header';
import Quotes from './pages/Quotes';

const App = () => (
  <>
    <div className="app">
      <div>
        <Header />
        <Routes>
          <Route path="calculator" element={<Calculator />} />
          <Route path="/" element={<Homepage />} />
          <Route path="quote" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
