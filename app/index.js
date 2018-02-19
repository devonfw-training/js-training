import 'bootstrap/dist/css/bootstrap.min.css';

import Person from './person';
import Account from './account';

const person = new Person('John', 'Example', [new Account(1500, 'EUR', 1), new Account(-2500, 'EUR', 2)]);

window.atm = (() => {
    // add person name
    document.querySelector('.card-title').innerHTML = `${person.firstName} ${person.lastName}`;

    // list person accounts
    const card = document.querySelector('.card');

    for (let account of person.accounts) {
        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(`Account Number: ${account.number}, Balance: `);

        paragraph.appendChild(paragraphText);

        const span = document.createElement('span');
        span.id = 'account' + account.number;
        span.innerText = account.balance;

        paragraph.appendChild(span);

        card.appendChild(paragraph);
    }

    // progress bar handling
    const container = document.querySelector('.container');
    const progress = document.querySelector('.progress');
    const button = document.querySelector('button');
    container.addEventListener('myEvent', (e) => {
        progress.hidden = !e.detail.showProgress;
    });

    return {
        withdrawMoney: function () {
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;

            const event = new CustomEvent('myEvent', {
                detail: { showProgress: true },
                bubbles: true
            });

            button.disabled = true;
            button.dispatchEvent(event);

            if (number && amount) {
                event.detail.showProgress = false;

                person.withdraw(number, amount).then(() => {
                    document.querySelector(`span#account${number}`).innerHTML = +document.querySelector(`span#account${number}`).innerHTML - amount;

                    button.dispatchEvent(event);
                    button.disabled = false;

                }).catch((reason) => {
                    console.warn(reason);
                    button.dispatchEvent(event);
                    button.disabled = false;
                });
            }
        },
        onInputChange: function () {
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;

            if (number > 0 && amount > 0) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        }
    }
})();