import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("initilal condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and Conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(button).toBeDisabled();
});

test("checkbox enables button on first click and disable on second click", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and Conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(button).toBeEnabled();

  //disbale button by uncheck checkbox
  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test("popever responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover start out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delived/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsandConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsandConditions);
  const popOver = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popOver).toBeInTheDocument();

  //popover disappears when we mouse out
  await user.unhover(termsandConditions);
  expect(popOver).not.toBeInTheDocument();
});
