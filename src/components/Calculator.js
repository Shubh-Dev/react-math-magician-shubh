import React from 'react';
import './Calculator.css';
import calculate from '../logic/Calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = (e) => {
  const Target = e.target.value;
  this.setState((state) => calculate({
    next: state.next,
    total: state.total,
    operation: state.operation,
  }, Target));
};

render() {
  const { total, next, operation } = this.state;
  return (
    <div className="container">
      <div className="display-area">
        {total}
        {' '}

        {' '}
        {operation}
        {' '}

        {' '}
        {next}
        {' '}
      </div>
      <button type="button" value="AC" onClick={this.handleClick}>
        AC
      </button>
      <button type="button" value="+/-" onClick={this.handleClick}>
        +/-
      </button>
      <button type="button" value="%" onClick={this.handleClick}>
        %
      </button>
      <button type="button" className="orange-color" value="÷" onClick={this.handleClick}>
        ÷
      </button>
      <button type="button" value="7" onClick={this.handleClick}>
        7
      </button>
      <button type="button" value="8" onClick={this.handleClick}>
        8
      </button>
      <button type="button" value="9" onClick={this.handleClick}>
        9
      </button>
      <button type="button" className="orange-color" value="x" onClick={this.handleClick}>
        x
      </button>
      <button type="button" value="4" onClick={this.handleClick}>
        4
      </button>
      <button type="button" value="5" onClick={this.handleClick}>
        5
      </button>
      <button type="button" value="6" onClick={this.handleClick}>
        6
      </button>
      <button type="button" className="orange-color" value="-" onClick={this.handleClick}>
        -
      </button>
      <button type="button" value="1" onClick={this.handleClick}>
        1
      </button>
      <button type="button" value="2" onClick={this.handleClick}>
        2
      </button>
      <button type="button" value="3" onClick={this.handleClick}>
        3
      </button>
      <button type="button" className="orange-color" value="+" onClick={this.handleClick}>
        +
      </button>
      <button type="button" className="bigger-btn" value="0" onClick={this.handleClick}>
        0
      </button>
      <button type="button" value="." onClick={this.handleClick}>
        .
      </button>
      <button type="button" className="orange-color" value="=" onClick={this.handleClick}>
        =
      </button>
    </div>
  );
}
}
export default Calculator;
