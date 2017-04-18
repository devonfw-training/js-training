'use strict';

console.log('hello from main js');

var personFactory = function(){
    var details = {
        firstName: 'John',
        lastName: 'example',
        accounts: [{
            balance: 1000.00,
            currency: 'EUR'
        }]
    }

    return {
        firstName: details.firstName,
        lastName: details.lastName,
        sayHello: function(){
            return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + details.accounts.length  + ' bank account(s)';
        }
    };
};

var johnExample = personFactory();
console.log(johnExample.sayHello());
