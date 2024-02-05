/**
 * Capitalize the first letter of a string
 * @param str string to capitalize
 * @returns string with the first letter capitalized
 */
const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;
