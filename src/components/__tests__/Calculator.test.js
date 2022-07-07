import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculater component test', () => {
    test('builds the snapshot of the Calculator component', () => {
        const tree = renderer.create(<Calculator />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
});