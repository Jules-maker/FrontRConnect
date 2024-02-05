// TODO add type GeoJson
/**
 * Create GeoJson from array of coordinates
 * @param {[number, number]} coordinates
 * @returns GeoJson
 */
const createGeoJson = (coordinates: [number, number]) => {
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coordinates
        }
    };
}

export default createGeoJson;
