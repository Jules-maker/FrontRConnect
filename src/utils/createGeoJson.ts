// TODO add type GeoJson
/**
 * Create GeoJson from array of coordinates
 * @param {number} lat - Latitude of the coordinate
 * @param {number} lon - Longitude of the coordinate
 * @returns GeoJson
 */
const createGeoJson = (lat: number, lon: number) => {
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [lon, lat]
        }
    };
}

export default createGeoJson;
