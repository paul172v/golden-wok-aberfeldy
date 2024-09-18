import { render, screen } from "@testing-library/react";
import MealDeal from "./MealDeal";

describe("MealDeal Component", () => {
  const mockProps = {
    mealAPrice: 19.99,
    mealAItems: ["Spring Rolls", "Sweet and Sour Chicken", "Egg Fried Rice"],
    mealBPrice: 29.99,
    mealBItems: ["Crispy Duck", "Beef with Black Bean Sauce", "Chow Mein"],
  };

  test("renders Meal Deal heading", () => {
    render(<MealDeal {...mockProps} />);

    // Check if the heading is rendered
    expect(screen.getByText("Meal Deal")).toBeInTheDocument();
  });

  test("renders Set Meal A and its price", () => {
    render(<MealDeal {...mockProps} />);

    // Check if Set Meal A heading and price are rendered
    expect(screen.getByText("Set Meal A (For 2 Persons)")).toBeInTheDocument();
    expect(screen.getByText("£19.99")).toBeInTheDocument();
  });

  test("renders Set Meal A items", () => {
    render(<MealDeal {...mockProps} />);

    // Check if Set Meal A items are rendered
    expect(
      screen.getByText("Spring Rolls / Sweet and Sour Chicken / Egg Fried Rice")
    ).toBeInTheDocument();
  });

  test("renders Set Meal B and its price", () => {
    render(<MealDeal {...mockProps} />);

    // Check if Set Meal B heading and price are rendered
    expect(screen.getByText("Set Meal B (For 3 Persons)")).toBeInTheDocument();
    expect(screen.getByText("£29.99")).toBeInTheDocument();
  });

  test("renders Set Meal B items", () => {
    render(<MealDeal {...mockProps} />);

    // Check if Set Meal B items are rendered
    expect(
      screen.getByText("Crispy Duck / Beef with Black Bean Sauce / Chow Mein")
    ).toBeInTheDocument();
  });
});
