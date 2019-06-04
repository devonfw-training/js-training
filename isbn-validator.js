let tmpl = document.createElement('template');
tmpl.innerHTML = `
 <style>

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

    isbnInput.addEventListener('keyup', this.validate);
  }

  validate = () => {
    const isbnInput = this.shadowRoot.querySelector('#isbn-input');
    const isbnValidLength = 13;
    const checkMarkCode = '&#10004;';
    const errorCode = '&#10006;';

    if (isbnInput.value.length === isbnValidLength) {
      const isIsbnValid = this.performValidation(isbnInput.value, isbnValidLength);
      if (isIsbnValid) {
        this.shadowRoot.querySelector('#validation-result').innerHTML = checkMarkCode;
      } else {
        this.shadowRoot.querySelector('#validation-result').innerHTML = errorCode;
      }
    } else {
      this.shadowRoot.querySelector('#validation-result').innerHTML = '';
    }
  };

  performValidation = (value, isbnValidLength) => {
    const weightForOddNumber = 1;
    const weightForEvenNumber = 3;

    let oddSum = 0;
    for (let i = isbnValidLength; i > 0; i = i - 2) {
      oddSum += +value[isbnValidLength - i] * weightForOddNumber;
    }

    let evenSum = 0;
    for (let i = isbnValidLength - 1; i > 0; i = i - 2) {
      evenSum += +value[isbnValidLength - i] * weightForEvenNumber;
    }

    return (evenSum + oddSum) % 10 === 0;
  };
}

customElements.define('isbn-validator', ISBNValidator);
