import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="container">
    <div className="display-area">0</div>
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="orange-color">÷</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="orange-color">x</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="orange-color">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="orange-color">+</button>
    <button type="button" className="bigger-btn">0</button>
    <button type="button">.</button>
    <button type="button" className="orange-color">=</button>
  </div>

);

export default Calculator;
