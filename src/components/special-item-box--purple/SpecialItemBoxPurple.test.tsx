import { render, screen } from "@testing-library/react";
import SpecialItemBoxPurple from "./SpecialItemBoxPurple";

describe("SpecialItemBoxPurple Component", () => {
  const mockProps = {
    number: 1,
    title: "Chef's Special",
    description: "A delicious mix of flavors from the best ingredients",
    price: 12.99,
  };

  test("renders the title with number and price", () => {
    render(<SpecialItemBoxPurple {...mockProps} />);

    // Check if the title, number, and price are rendered correctly
    expect(screen.getByText(/1\./)).toBeInTheDocument(); // Checks for the number
    expect(screen.getByText(/Chef's Special/)).toBeInTheDocument(); // Checks for the title
    expect(screen.getByText(/£12.99/)).toBeInTheDocument(); // Checks for the price
  });

  test("renders the description", () => {
    render(<SpecialItemBoxPurple {...mockProps} />);

    // Check if the description is rendered
    expect(
      screen.getByText(/A delicious mix of flavors from the best ingredients/)
    ).toBeInTheDocument();
  });

  test("renders price with two decimals", () => {
    render(<SpecialItemBoxPurple {...mockProps} />);

    // Check if the price is formatted correctly with two decimal places
    expect(screen.getByText(/£12.99/)).toBeInTheDocument();
  });
});
