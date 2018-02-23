const person = new Person('John', 'Example', [new Account(1500, 'EUR', 1), new Account(-2500, 'EUR', 2)]);

const atm = (() => {
    // add person name
    document.querySelector('.card-title').innerHTML = `${person.firstName} ${person.lastName}`;
    
    // list person accounts
    const card = document.querySelector('.card-body');

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

    return {
        withdrawMoney: function () {
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;
            if (number && amount) {
                person.withdraw(number, amount).then(() => {
                    document.querySelector(`span#account${number}`).innerHTML = +document.querySelector(`span#account${number}`).innerHTML - amount;
                }).catch((reason) => console.warn(reason));
            }
        },
        onInputChange: function(){
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;
            const button = document.querySelector('button');

            if (number > 0 && amount > 0){
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        }
    }
})();