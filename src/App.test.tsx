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
  jest.fn(() => <div>Special Item Box Purple Component</div>)
);
jest.mock("./components/special-item-box--white/SpecialItemBoxWhite", () =>
  jest.fn(() => <div>Special Item Box White Component</div>)
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

describe("App Component", () => {
  test("Should render the website title correctly", () => {
    render(<App />);

    const titleElementPart1 = screen.getByText(/Golden/i);
    const titleElementPart2 = screen.getByText(/Wok -/i);
    const titleElementPart3 = screen.getByText(/Chinese Takeaway/i);
    const iconElement = screen.getByText("Icon");
    const mandarinElement = screen.getByText(/金锅/i);

    expect(titleElementPart1).toBeInTheDocument();
    expect(titleElementPart2).toBeInTheDocument();
    expect(titleElementPart3).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(mandarinElement).toBeInTheDocument();
  });

  test("Should render the website sections", () => {
    render(<App />);

    const contactComponent = screen.getByText("Contact Component");
    const specialItemBoxPurpleComponent = screen.getByText(
      "Special Item Box Purple Component"
    );
    const specialItemBoxWhiteComponents = screen.getAllByText(
      "Special Item Box White Component"
    );
    const mealDealComponent = screen.getByText("Meal Deal Component");
    const locationComponent = screen.getByText("Location Component");
    const footerComponent = screen.getByText("Footer Component");

    expect(contactComponent).toBeInTheDocument();
    expect(specialItemBoxPurpleComponent).toBeInTheDocument();
    expect(specialItemBoxWhiteComponents).toHaveLength(2);
    expect(mealDealComponent).toBeInTheDocument();
    expect(locationComponent).toBeInTheDocument();
    expect(footerComponent).toBeInTheDocument();
  });

  test("Should render page navigation links", () => {
    render(<App />);

    const contactLink = screen.getByText("Contact");
    const menuLink = screen.getByText("Menu");
    const locationLink = screen.getByText("Location");

    expect(contactLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(locationLink).toBeInTheDocument();
  });

  test("Should render menu navigation links", () => {
    render(<App />);

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
