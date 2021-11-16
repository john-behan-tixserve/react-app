import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerGreeting = screen.getByText(/Hi there/i);
  expect(headerGreeting).toBeInTheDocument();
});
