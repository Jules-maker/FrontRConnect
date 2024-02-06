const R = 6371e3; // Earth's radius in meters
/**
 * Calculate the distance between two points on Earth using their geographical coordinates.
 * @param lat1 - Latitude of the first point in degrees.
 * @param lon1 - Longitude of the first point in degrees.
 * @param lat2 - Latitude of the second point in degrees.
 * @param lon2 - Longitude of the second point in degrees.
 * @returns The distance between the two points in meters.
 * @throws {Error} if the latitude or longitude values are invalid.
 */
const getDistanceBetweenCords = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    if (lat1 < -90 || lat1 > 90 || lat2 < -90 || lat2 > 90) {
        throw new Error('Invalid latitude value. It should be between -90 and 90.');
    }
    if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
        throw new Error('Invalid longitude value. It should be between -180 and 180.');
    }
    const lat1InRadians = lat1 * Math.PI/180; // Convert latitude from degrees to radians
    const lat2InRadians = lat2 * Math.PI/180;
    const differenceInLatitude = (lat2-lat1) * Math.PI/180;
    const differenceInLongitude = (lon2-lon1) * Math.PI/180;

    const sinDifferenceInLatitude = Math.sin(differenceInLatitude/2);
    const cosLat1 = Math.cos(lat1InRadians);
    const cosLat2 = Math.cos(lat2InRadians);
    const sinDifferenceInLongitude = Math.sin(differenceInLongitude/2);

    const a = sinDifferenceInLatitude * sinDifferenceInLatitude +
              cosLat1 * cosLat2 *
              sinDifferenceInLongitude * sinDifferenceInLongitude;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // Distance in metres
}

export default getDistanceBetweenCords;