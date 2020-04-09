import returnPaySystem from './paySystems/returnPaySystem';
import showValidPaySystem from './paySystems/showValidPaySystem';
import validateCardNumber from './validation/validateCardNumber';

export default class Main {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.inputField = '';
  }

  static get markup() {
    return `
    <div id="card">
      <form class="card-validation-form">
        <div class="paySystemsImages">
          <img class="paySystemIMG" id="american" src="./img/american_express.png" alt="">
          <img class="paySystemIMG" id="dinersClub" src="./img/diners_club.png" alt="">
          <img class="paySystemIMG" id="discover" src="./img/discover_curved.png" alt="">
          <img class="paySystemIMG" id="jcb" src="./img/jcb.png" alt="">
          <img class="paySystemIMG" id="mastercard" src="./img/mastercard_curved.png" alt="">
          <img class="paySystemIMG" id="visa" src="./img/visa_curved.png" alt="">
          <img class="paySystemIMG" id="mir" src="./img/mir_card.png" alt="">
        </div>
        <input type="text" id="input">
        <button id="validate-button">Click to Validate</button>
      </form>
    </div>
    `;
  }

  init() {
    this.parentEl.innerHTML = this.constructor.markup;
    const cardValidationForm = this.parentEl.querySelector('.card-validation-form');
    this.inputField = this.parentEl.querySelector('[id=input]');
    cardValidationForm.addEventListener('submit', (event) => this.submt(event));
    this.inputField.addEventListener('keypress', (event) => this.keypress(event));
    this.inputField.addEventListener('input', () => this.input());
  }

  submt(event) {
    event.preventDefault();
    this.addCurrentClass(this.inputField.value);
  }

  keypress(event) {
    event.preventDefault();
    if (event.key.search(/\d/) !== -1) {
      this.inputField.value += event.key;
      showValidPaySystem(returnPaySystem(this.inputField.value));
    }

    if (event.key === 'Enter') {
      this.addCurrentClass(this.inputField.value);
    }
  }

  input() {
    showValidPaySystem(returnPaySystem(this.inputField.value));
    if (this.inputField.value === '') {
      if (this.inputField.classList.contains('valid')) {
        this.inputField.classList.remove('valid');
      } else if (this.inputField.classList.contains('invalid')) {
        this.inputField.classList.remove('invalid');
      }
    }
  }

  addCurrentClass(cardNumber) {
    if (cardNumber.length < 1 || !validateCardNumber(cardNumber)) {
      this.inputField.className = 'invalid';
      return;
    }
    this.inputField.className = 'valid';
  }
}
