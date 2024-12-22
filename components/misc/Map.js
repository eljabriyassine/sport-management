import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const lat = 40.609787846393196;
  const lng = 20.7890265133657;

  return (
    <main className="d w-[100%] h-[10vh] z-0">
      {/*leaflet and react-leaflet*/}
      <div>
        <MapContainer center={[34.2644, -6.5779]} zoom={12}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CircleMarker
            className="n w-[150px] h-[150px]"
            center={[lat, lng]}
            radius={10}
            color="transparent"
            fillColor="green"
            fillOpacity={0.5}
          >
            <Popup className="w-[460px] h-[150px]">
              <p className="text-[25px]">My Location</p>
              {/* Add a link to open location in Google Maps */}
              <a
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Open in Google Maps
              </a>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </main>
  );
}

export default Map;
