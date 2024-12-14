import { render, screen } from "@testing-library/react";
import Location from "./Location";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Mock react-leaflet components
jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn(({ children }) => <div>{children}</div>),
  TileLayer: jest.fn(() => <div>TileLayer Mock</div>),
  Marker: jest.fn(({ children }) => <div>{children}</div>),
  Popup: jest.fn(({ children }) => <div>{children}</div>),
}));

// Mock leaflet Icon
jest.mock("leaflet", () => ({
  Icon: jest.fn(() => ({})),
}));

describe("Location Component", () => {
  test("renders map with correct heading", () => {
    render(<Location />);

    // Check for the heading
    expect(screen.getByText("Location")).toBeInTheDocument();
  });

  test("renders the MapContainer with the correct center and zoom", () => {
    render(<Location />);

    // Check if the MapContainer was rendered (mocked)
    expect(MapContainer).toHaveBeenCalledWith(
      expect.objectContaining({
        center: { lat: 56.621802, lng: -3.865618 },
        zoom: 20,
        scrollWheelZoom: false,
      }),
      {}
    );
  });

  test("renders TileLayer with correct attribution and url", () => {
    render(<Location />);

    // Check if TileLayer was rendered with the correct props
    expect(TileLayer).toHaveBeenCalledWith(
      expect.objectContaining({
        attribution: expect.stringContaining("OpenStreetMap"),
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      }),
      {}
    );
  });

  test("renders Marker at the correct position", () => {
    render(<Location />);

    // Check if the Marker is rendered with the correct position
    expect(Marker).toHaveBeenCalledWith(
      expect.objectContaining({
        position: { lat: 56.621802, lng: -3.865618 },
      }),
      {}
    );
  });

  test("renders Popup inside the Marker", () => {
    render(<Location />);

    // Check if the Popup with the correct content is rendered
    // Using a more flexible regex matcher for the text content
    expect(screen.getByText(/we are here!/i)).toBeInTheDocument();
  });
});
