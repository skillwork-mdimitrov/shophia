import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project name', () => {
  render(<App />);
  const projectName = screen.getByText(/Shophia/i);
  expect(projectName).toBeInTheDocument();
});
