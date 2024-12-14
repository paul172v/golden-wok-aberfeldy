import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("MenuItem Component", () => {
  const mockProps = {
    number: 1,
    name: "Spring Rolls",
    price: 5.5,
    quantity: 3,
    description: "Delicious crispy rolls filled with vegetables",
  };

  const mockPropsWithoutQuantity = {
    number: 20,
    name: "Sweet and Sour Chicken",
    price: 9.99,
    description: "A sweet and tangy chicken dish",
  };

  const mockPropsWithoutDescription = {
    number: 30,
    name: "Egg Fried Rice",
    price: 2.99,
    quantity: 2,
  };

  test("renders menu item with number, name, price, and quantity", () => {
    render(<MenuItem {...mockProps} />);

    // Check if the item number, name, price, and quantity are rendered correctly
    expect(screen.getByText("1.")).toBeInTheDocument();
    expect(screen.getByText(/Spring Rolls/)).toBeInTheDocument();
    expect(screen.getByText(/£5.50/)).toBeInTheDocument();
    expect(screen.getByText(/\(3\)/)).toBeInTheDocument(); // Checks for the quantity in brackets
  });

  test("renders description if provided", () => {
    render(<MenuItem {...mockProps} />);

    // Check if the description is rendered
    expect(
      screen.getByText(/Delicious crispy rolls filled with vegetables/)
    ).toBeInTheDocument();
  });

  test("does not render quantity if not provided", () => {
    render(<MenuItem {...mockPropsWithoutQuantity} />);

    // Ensure the quantity is not rendered when it's not passed
    expect(screen.queryByText(/\(3\)/)).not.toBeInTheDocument();

    // Check if the item name and price are rendered correctly
    expect(screen.getByText(/Sweet and Sour Chicken/)).toBeInTheDocument();
    expect(screen.getByText(/£9.99/)).toBeInTheDocument();
  });

  test("does not render description if not provided", () => {
    render(<MenuItem {...mockPropsWithoutDescription} />);

    // Ensure the description is not rendered when it's not passed
    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
  });

  test("renders correctly formatted prices with two decimals", () => {
    render(<MenuItem {...mockPropsWithoutQuantity} />);

    // Check that the price is formatted correctly with two decimal places
    expect(screen.getByText(/£9.99/)).toBeInTheDocument();
  });

  test("renders correctly formatted menu item with letter marker", () => {
    const mockLetterProps = {
      number: 40,
      name: "Salt & Pepper Tofu",
      price: 7.99,
    };

    render(<MenuItem {...mockLetterProps} />);

    // Check that the correct number with letter marker is rendered
    expect(screen.getByText("40a.")).toBeInTheDocument();
    expect(screen.getByText(/Salt & Pepper Tofu/)).toBeInTheDocument();
  });
});
