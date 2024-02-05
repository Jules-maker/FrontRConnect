/** 
 * Check if the card number is in the correct format
 * @param cardNumber card number to check
 * @returns boolean if the card number is in the correct format
 */
const checkCardFormat = (cardNumber: string): boolean => {
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return cardNumberRegex.test(cardNumber);
}

export default checkCardFormat;