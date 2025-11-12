import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Plantsy Admin header', () => {
  render(<App />);
  const headerElement = screen.getByText(/plantsy admin/i);
  expect(headerElement).toBeInTheDocument();
});