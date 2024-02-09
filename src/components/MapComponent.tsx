import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = () =>{
  return (
    <Map
      initialViewState={{
        longitude: 1.6,
        latitude: 49.26,
        zoom: 3
      }}
      mapStyle="https://demotiles.maplibre.org/style.json"
      style={{width: '100vw', height: '-webkit-fill-available'}}
    />
  );
}

export default MapComponent;