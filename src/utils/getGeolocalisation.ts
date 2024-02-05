/**
 * Get the current geolocalisation of the user
 * @returns {Promise<GeolocationPosition>}
 * @throws {Error} if the geolocalisation is not supported
 */
const getGeolocalisation = () => {
    return new Promise((resolve, reject) => {
        if(!navigator.geolocation) reject(new Error('Geolocalisation not supported'));
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export default getGeolocalisation;
