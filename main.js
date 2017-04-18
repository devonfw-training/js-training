'use strict';

console.log('hello from main js');

// rename personFactory to person and use module pattern with IIFE here
var personFactory = function(){
    var details = {
        firstName: 'John',
        lastName: 'example',
        // move accounts from details object to returned object
        accounts: [{
            balance: 1000.00,
            currency: 'EUR'
        }]
    };
    // create local calculateBalance() function which iterates over all accounts and calculates and returns total balance
    // watch out for the 'this' context

    return {
        firstName: details.firstName,
        lastName: details.lastName,
        // add accounts list here
        // update sayHello() to print also the total balance
        // remember to update details.accounts.length call and call calculateBalance with the correct context of 'this'
        sayHello: function(){
            return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + details.accounts.length  + ' bank account(s)';
        }
    };
};

var johnExample = personFactory();
console.log(johnExample.sayHello());
