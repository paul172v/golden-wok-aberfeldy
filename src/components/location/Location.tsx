import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import classes from "./Location.module.scss";

import "./leaflet.scss";

const Location = () => {
  class LatLng {
    lat: number;
    lng: number;
    constructor(lat: number, lng: number) {
      this.lat = lat;
      this.lng = lng;
    }
  }

  const positionStart = new LatLng(56.621802, -3.865618);
  const positionGoldenWok = new LatLng(56.621802, -3.865618);

  const goldenWokIcon = new L.Icon({
    iconUrl: "/src/assets/marker-icon.png",
    iconSize: [30, 40], // Size of the icon
    iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>Location</h2>
      <MapContainer center={positionStart} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGoldenWok} icon={goldenWokIcon}>
          <Popup>We are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
