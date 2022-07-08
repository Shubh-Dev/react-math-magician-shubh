import '@testing-library/jest-dom';
import {
  render,
  screen,
} from '@testing-library/react';
import Calculator from './Calculator';

test('check if the Caluclator component rendered by checking if the % button exist in the DOM', () => {
  render(<Calculator />);
  const resultElement = screen.getByText('%', { exact: false });
  expect(resultElement).toBeInTheDocument();
});
