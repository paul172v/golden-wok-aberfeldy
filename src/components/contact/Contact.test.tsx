import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

// Mock the react-icons/fa FaPhone component
jest.mock("react-icons/fa", () => ({
  FaPhone: jest.fn(() => <span>Phone Icon</span>),
}));

describe("Contact Component", () => {
  test("renders contact phone numbers correctly", () => {
    render(<Contact />);

    // Check for the presence of the first phone number link
    expect(
      screen.getByRole("link", { name: /Call Us: \+44 1887 224 425/i })
    ).toBeInTheDocument();

    // Check for the presence of the second phone number link
    expect(
      screen.getByRole("link", {
        name: /Customer Service Line: \+44 7888 771 133/i,
      })
    ).toBeInTheDocument();
  });

  test("renders phone icons", () => {
    render(<Contact />);

    // Check for the phone icon (mocked)
    expect(screen.getAllByText("Phone Icon")).toHaveLength(2); // Two instances of FaPhone
  });

  test("renders notices and instructions", () => {
    render(<Contact />);

    // Check if the 'cash only' notice is displayed
    expect(screen.getByText(/We accept cash only!/i)).toBeInTheDocument();

    // Check if the request to have an order ready is displayed
    expect(
      screen.getByText(
        /Please have your order ready before calling and report to the counter upon arrival for collection/i
      )
    ).toBeInTheDocument();

    // Check if the allergen warning is displayed
    expect(
      screen.getByText(/Please inform us if you have any food allergies/i)
    ).toBeInTheDocument();
  });

  test("renders opening hours and address", () => {
    render(<Contact />);

    // Check for the opening hours text
    expect(screen.getByText(/Open 6 days/i)).toBeInTheDocument();
    expect(screen.getByText(/Wednesday - Monday/i)).toBeInTheDocument();
    expect(screen.getByText(/16:00 - 22:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Closed - Tuesday/i)).toBeInTheDocument();

    // Check for the address
    expect(screen.getByText(/31 Dunkeld Street/i)).toBeInTheDocument();
    expect(screen.getByText(/Aberfeldy/i)).toBeInTheDocument();
    expect(screen.getByText(/PH15 2AF/i)).toBeInTheDocument();
  });
});
