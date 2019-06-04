(function() {
  const isbnInput = document.querySelector('#isbn-input');
  const validationResultSpan = document.querySelector('#validation-result');
  const isbnValidLength = 13;

  isbnInput.addEventListener('keyup', performValidation);

  function performValidation() {
    const checkMarkCode = '&#10004;';
    const errorCode = '&#10006;';

    if (isbnInput.value.length === isbnValidLength) {
      const isValid = isValidISBN(isbnInput.value);
      if (isValid) {
        validationResultSpan.innerHTML = checkMarkCode;
      } else {
        validationResultSpan.innerHTML = errorCode;
      }
    } else {
      validationResultSpan.innerHTML = '';
    }
  }

  function isValidISBN(value) {
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
  }
})();
