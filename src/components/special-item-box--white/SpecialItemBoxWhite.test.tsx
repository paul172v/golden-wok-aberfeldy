import { render, screen } from "@testing-library/react";
import SpecialItemBoxWhite from "./SpecialItemBoxWhite";

describe("SpecialItemBoxWhite Component", () => {
  const mockPropsWithPrice = {
    number: 1,
    title: "Special Combo",
    description: "A tasty combo with various dishes",
    price: 14.99,
  };

  const mockPropsWithListItems = {
    number: 2,
    title: "Family Meal",
    listItem1: { size: "Small", price: 10.99 },
    listItem2: { size: "Medium", price: 15.99 },
    listItem3: { size: "Large", price: 20.99 },
  };

  test("renders the title with number and price when provided", () => {
    render(<SpecialItemBoxWhite {...mockPropsWithPrice} />);

    // Check if the number, title, and price are rendered correctly
    expect(screen.getByText(/1\./)).toBeInTheDocument(); // Checks for the number
    expect(screen.getByText(/Special Combo/)).toBeInTheDocument(); // Checks for the title
    expect(screen.getByText(/£14.99/)).toBeInTheDocument(); // Checks for the price
  });

  test("renders the description when provided", () => {
    render(<SpecialItemBoxWhite {...mockPropsWithPrice} />);

    // Check if the description is rendered
    expect(
      screen.getByText(/A tasty combo with various dishes/)
    ).toBeInTheDocument();
  });

  test("renders the title with number and no main price when price is not provided", () => {
    render(<SpecialItemBoxWhite {...mockPropsWithListItems} />);

    // Check if the number and title are rendered correctly
    expect(screen.getByText(/2\./)).toBeInTheDocument();
    expect(screen.getByText(/Family Meal/)).toBeInTheDocument();

    // Ensure the main price (associated with the title) is not rendered
    expect(screen.queryByText(/£14.99/)).not.toBeInTheDocument(); // This is checking for a specific main price
  });

  test("renders the list items when description is not provided", () => {
    render(<SpecialItemBoxWhite {...mockPropsWithListItems} />);

    // Check if the list items are rendered
    expect(screen.getByText(/Small/)).toBeInTheDocument();
    expect(screen.getByText(/£10.99/)).toBeInTheDocument();
    expect(screen.getByText(/Medium/)).toBeInTheDocument();
    expect(screen.getByText(/£15.99/)).toBeInTheDocument();
    expect(screen.getByText(/Large/)).toBeInTheDocument();
    expect(screen.getByText(/£20.99/)).toBeInTheDocument();
  });
});
