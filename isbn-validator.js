let tmpl = document.createElement('template');
tmpl.innerHTML = `
 <style>
</style>
<div>
 <input type="text" id="isbn-input" /> 
 <span id="validation-result"></span>
</div>
  
`;

class ISBNValidator extends HTMLElement {
  isbnValidLength = 13;
  isbnInput;
  validationResultSpan;

  constructor() {
    super();

    const template = tmpl.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template);

    this.isbnInput = this.shadowRoot.querySelector('#isbn-input');
    this.validationResultSpan = this.shadowRoot.querySelector('#validation-result');
    this.isbnInput.addEventListener('keyup', this.performValidation.bind(this));
  }

  performValidation() {
    const checkMarkCode = '&#10004;';
    const errorCode = '&#10006;';

    if (this.isbnInput.value.length === this.isbnValidLength) {
      const isValid = this.isValidISBN(this.isbnInput.value);
      if (isValid) {
        this.validationResultSpan.innerHTML = checkMarkCode;
      } else {
        this.validationResultSpan.innerHTML = errorCode;
      }
    } else {
      this.validationResultSpan.innerHTML = '';
    }
  }

  isValidISBN(value) {
    const weightForOddNumber = 1;
    const weightForEvenNumber = 3;

    let oddSum = 0;
    for (let i = this.isbnValidLength; i > 0; i = i - 2) {
      oddSum += +value[this.isbnValidLength - i] * weightForOddNumber;
    }

    let evenSum = 0;
    for (let i = this.isbnValidLength - 1; i > 0; i = i - 2) {
      evenSum += +value[this.isbnValidLength - i] * weightForEvenNumber;
    }

    return (evenSum + oddSum) % 10 === 0;
  }
}

customElements.define('isbn-validator', ISBNValidator);
