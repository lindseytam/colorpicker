import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);

  // expect title to be rendered
  const title = screen.getByText(/Shapely Color Picker/i);
  expect(title).toBeInTheDocument();

  // There should be 3 buttons (one for each shape)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(3)

  // test circle button is rendered
  const circleButton = screen.getByTestId('circle-button')
  expect(circleButton).toBeInTheDocument()

  // test clicking circle button is rendered
  fireEvent.click(circleButton)
});
