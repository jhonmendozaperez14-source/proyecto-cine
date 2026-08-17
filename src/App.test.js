import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cartelera section', () => {
  render(<App />);
  const elems = screen.getAllByText(/cartelera/i);
  expect(elems.length).toBeGreaterThan(0);
});
