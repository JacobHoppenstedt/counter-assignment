// import necessary react testing library helpers here
import {render, screen, fireEvent} from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
const headingElement = screen.getByText(/Counter/i);
expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementBtn = screen.getByText("+");
  const countElement = screen.getByTestId("count");
  fireEvent.click(incrementBtn);
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementBtn = screen.getByText("-");
  const countElement = screen.getByTestId("count");
  fireEvent.click(decrementBtn);
  expect(countElement).toHaveTextContent("-1");
});