export default function returnPaySystem(cardNumber) {
  let paySystem = null;
  if (cardNumber.search(/^(34|37)/) !== -1) {
    paySystem = 'american';
  } else if (cardNumber.search(/^(36|30[0-5]|3[89]|3095)/) !== -1) {
    paySystem = 'dinersClub';
  } else if (cardNumber.search(/^(6[45]|6011)/) !== -1) {
    paySystem = 'discover';
  } else if (cardNumber.search(/^(352[89]|35[3-8][0-9])/) !== -1) {
    paySystem = 'jcb';
  } else if (cardNumber.search(/^(5[1-5])/) !== -1) {
    paySystem = 'mastercard';
  } else if (cardNumber.search(/^(4)/) !== -1) {
    paySystem = 'visa';
  } else if (cardNumber.search(/^(220[0-4])/) !== -1) {
    paySystem = 'mir';
  }
  return paySystem;
}
