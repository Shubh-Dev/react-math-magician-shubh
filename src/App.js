import React from 'react';
import './App.css';
// import {
//   BrowserRouter as router, Routes, Route, Link,
// } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';

const App = () => (
  <>
    <Calculator />
    <Home />
  </>
);

export default App;
