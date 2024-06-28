import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  console.log(document.body.innerHTML); // Log the rendered output

  const linkElement = await screen.findByText(/ToDo Liste/i);
  
  expect(linkElement).toBeInTheDocument();
});
