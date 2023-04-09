import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initilal condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Tearms and Consitons/i,
  });
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(button).toBeDisabled();
});

test("checkbox enables button on first click and disable on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Tearms and Consitons/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  //disbale button by uncheck checkbox
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
