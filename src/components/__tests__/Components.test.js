import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/Home';
import Quotes from '../../pages/Quotes';
import Calculator from '../Calculator';

describe('Calculater component test', () => {
  test('builds the snapshot of the Calculator component', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('builds the snapshot of the Home component', () => {
    const tree = renderer.create(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('builds the snapshot of the Quotes component', () => {
    const tree = renderer.create(<Quotes />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
