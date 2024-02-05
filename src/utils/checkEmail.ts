/**
 * Check if the email is valid
 * @param email email to check
 * @returns boolean if the email is valid
 */
const checkEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

export default checkEmail;