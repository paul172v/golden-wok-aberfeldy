import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock components and external imports
jest.mock("react-scroll", () => ({
  Link: jest.fn(({ children, to }) => <a href={`#${to}`}>{children}</a>),
  Element: jest.fn(({ children }) => <div>{children}</div>),
}));
jest.mock("react-icons/gi", () => ({
  GiNoodles: jest.fn(() => <span>Icon</span>),
}));
jest.mock("./components/contact/Contact", () =>
  jest.fn(() => <div>Contact Component</div>)
);
jest.mock("./components/special-item-box--purple/SpecialItemBoxPurple", () =>
  jest.fn(() => <div>Special Item Box Purple</div>)
);
jest.mock("./components/special-item-box--white/SpecialItemBoxWhite", () =>
  jest.fn(() => <div>Special Item Box White</div>)
);
jest.mock("./components/heading/Heading", () =>
  jest.fn(({ heading }) => <h2>{heading}</h2>)
);
jest.mock("./components/menu-item/MenuItem", () =>
  jest.fn(({ name }) => <div>{name}</div>)
);
jest.mock("./components/meal-deal/MealDeal", () =>
  jest.fn(() => <div>Meal Deal Component</div>)
);
jest.mock("./components/location/Location", () =>
  jest.fn(() => <div>Location Component</div>)
);
jest.mock("./components/footer/Footer", () =>
  jest.fn(() => <div>Footer Component</div>)
);

describe.skip("App Component", () => {
  test("renders the App component correctly", () => {
    render(<App />);

    // Check for title elements (with flexible text matching)
    expect(screen.getByText(/Golden/i)).toBeInTheDocument();
    expect(screen.getByText(/Wok -/i)).toBeInTheDocument();
    expect(screen.getByText(/Chinese Takeaway/i)).toBeInTheDocument();

    // Check for Icon
    expect(screen.getByText("Icon")).toBeInTheDocument();

    // Check if Contact Component renders
    expect(screen.getByText("Contact Component")).toBeInTheDocument();

    // Check for Menu Navigation sections (use getAllByText for "Starters")
    expect(screen.getAllByText("Starters")).toHaveLength(2); // One in the navigation, one in the section heading

    // Check for Meal Deal component
    expect(screen.getByText("Meal Deal Component")).toBeInTheDocument();

    // Check if Footer renders
    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<App />);

    // Check for Contact link
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // Check for Menu link
    expect(screen.getByText("Menu")).toBeInTheDocument();

    // Check for Location link
    expect(screen.getByText("Location")).toBeInTheDocument();
  });

  test("renders special items", () => {
    render(<App />);

    // Check for Special Item components (handle multiple instances)
    expect(screen.getByText("Special Item Box Purple")).toBeInTheDocument();
    expect(screen.getAllByText("Special Item Box White")).toHaveLength(2); // Assuming two instances
  });

  test("menu items are rendered", () => {
    render(<App />);

    // Check for specific menu items (handle multiple instances)
    expect(screen.getAllByText("Starters")).toHaveLength(2); // One in the navigation, one in the section
  });

  test("renders scroll links for categories", () => {
    render(<App />);

    // Use getByRole to find the link by its name
    expect(screen.getByRole("link", { name: "Starters" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Dim Sum" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Salt & Pepper Dishes" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Curry Dishes" })
    ).toBeInTheDocument();
  });
});
