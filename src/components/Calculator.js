import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: 0, next: null, operation: null });
  const handleClick = (e) => {
    setResult(calculate(result, e.target.value));
  };
  const { total, next, operation } = result;
  return (
    <>
      <h2 className="title-cal">Let&apos;s do some Math!!</h2>
      <div className="container">
        <div className="display-area">
          {total}

          {operation}

          {next}

        </div>
        <button type="button" value="AC" onClick={handleClick}>
          AC
        </button>
        <button type="button" value="+/-" onClick={handleClick}>
          +/-
        </button>
        <button type="button" value="%" onClick={handleClick}>
          %
        </button>
        <button type="button" className="orange-color" value="÷" onClick={handleClick}>
          ÷
        </button>
        <button type="button" value="7" onClick={handleClick}>
          7
        </button>
        <button type="button" value="8" onClick={handleClick}>
          8
        </button>
        <button type="button" value="9" onClick={handleClick}>
          9
        </button>
        <button type="button" className="orange-color" value="x" onClick={handleClick}>
          x
        </button>
        <button type="button" value="4" onClick={handleClick}>
          4
        </button>
        <button type="button" value="5" onClick={handleClick}>
          5
        </button>
        <button type="button" value="6" onClick={handleClick}>
          6
        </button>
        <button type="button" className="orange-color" value="-" onClick={handleClick}>
          -
        </button>
        <button type="button" value="1" onClick={handleClick}>
          1
        </button>
        <button type="button" value="2" onClick={handleClick}>
          2
        </button>
        <button type="button" value="3" onClick={handleClick}>
          3
        </button>
        <button type="button" className="orange-color" value="+" onClick={handleClick}>
          +
        </button>
        <button type="button" className="bigger-btn" value="0" onClick={handleClick}>
          0
        </button>
        <button type="button" value="." onClick={handleClick}>
          .
        </button>
        <button type="button" className="orange-color" value="=" onClick={handleClick}>
          =
        </button>
      </div>
    </>
  );
};
export default Calculator;
