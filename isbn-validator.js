let tmpl = document.createElement('template');
tmpl.innerHTML = `
 <style>
 #validation-result{
     font-weight: bolder;
 }
</style>
<div>
Podaj 13-znakowy number ISBN (bez myślników): 
 <input type="text" id="isbn-input" /> 
 <span id="validation-result"></span>
</div>
  
`;

class ISBNValidator extends HTMLElement {
  constructor() {
    super();

    const template = tmpl.content.cloneNode(true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template);

    const isbnInput = this.shadowRoot.querySelector('#isbn-input');

    isbnInput.addEventListener('keyup', this.validateIsbn);
  }

  validateIsbn() {
    const isbnValidLength = 13;
    const weightForOddNumber = 1;
    const weightForEvenNumber = 3;
    const checkMarkCode = '&#10004;';
    const errorCode = '&#10006;';

    if (this.value.length === isbnValidLength) {
      let oddSum = 0;
      for (let i = isbnValidLength; i > 0; i = i - 2) {
        oddSum += +this.value[isbnValidLength - i] * weightForOddNumber;
      }

      let evenSum = 0;
      for (let i = isbnValidLength - 1; i > 0; i = i - 2) {
        evenSum += +this.value[isbnValidLength - i] * weightForEvenNumber;
      }

      if ((evenSum + oddSum) % 10 === 0) {
        this.parentElement.querySelector('#validation-result').innerHTML = checkMarkCode;
      } else {
        this.parentElement.querySelector('#validation-result').innerHTML = errorCode;
      }
    } else {
      this.parentElement.querySelector('#validation-result').innerHTML = '';
    }
  }
}

customElements.define('isbn-validator', ISBNValidator);
