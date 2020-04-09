export default function validateCardNumber(cardNumber) {
  let check = 0;
  let digit = 0;
  let even = false;
  for (let i = cardNumber.length - 1; i >= 0; i -= 1) {
    const cDigit = cardNumber[i];
    digit = parseInt(cDigit, 10);
    if (even) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    check += digit;
    even = !even;
  }

  return (check % 10) === 0;
}
