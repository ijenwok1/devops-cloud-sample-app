import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevOps Cloud Course title to screen', () => {
  render(<App />);
  const titleElement = screen.getByText(/DevOps Cloud Course/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders ALT text to screen', () => {
  render(<App />);
  const altElement = screen.getByAltText(/CBF.*? logo/i);
  expect(altElement).toBeInTheDocument();
});
