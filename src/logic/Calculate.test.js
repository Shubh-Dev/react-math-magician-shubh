import React from "react";
import calculate from './Calculate'

describe('state object operation test', () => {
    test('test next', () => {
      const stateObj = { total: '5', next: null, operation: '+' };
      const button = '5';
      const result = calculate(stateObj, button);
  
      expect(result.next).toEqual('5');
    });
  
    test('test object operation property', () => {
      const stateObj = { total: null, next: '10', operation: null };
      const button = 'x';
      const result = calculate(stateObj, button);
  
      expect(result.operation).toEqual('x');
    });
  
    test('test object total property', () => {
      const stateObj = { total: null, next: '10', operation: null };
      const button = '-';
      const result = calculate(stateObj, button);
  
      expect(result.total).toEqual('10');
    });
  });