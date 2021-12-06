import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);

  const title = screen.getByText(/Shapely Color Picker/i);
  expect(title).toBeInTheDocument();

  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(3)
});
