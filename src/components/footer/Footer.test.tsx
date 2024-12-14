import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// Mock the FaFacebook icon
jest.mock("react-icons/fa", () => ({
  FaFacebook: jest.fn(() => <span>Facebook Icon</span>),
}));

describe("Footer Component", () => {
  test("renders copyright text correctly", () => {
    render(<Footer />);

    // Check for the copyright text
    expect(screen.getByText("© Golden Wok 2024")).toBeInTheDocument();
  });

  test("renders Facebook link with correct href", () => {
    render(<Footer />);

    // Check for the Facebook link
    const facebookLink = screen.getByRole("link", {
      name: /facebook icon/i, // Since the icon is mocked as "Facebook Icon"
    });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/profile.php?id=61553648932085"
    );
  });

  test("opens Facebook link in a new tab", () => {
    render(<Footer />);

    // Check if the Facebook link opens in a new tab
    const facebookLink = screen.getByRole("link", {
      name: /facebook icon/i,
    });
    expect(facebookLink).toHaveAttribute("target", "_blank");
  });

  test("renders Facebook icon", () => {
    render(<Footer />);

    // Check that the Facebook icon is rendered (mocked)
    expect(screen.getByText("Facebook Icon")).toBeInTheDocument();
  });
});
