// remove this
'use strict';

console.log('hello from main js');

// replace with class Account with the appropriate constructor (balance, currency)
var Account = function (balance, currency) {
    this.balance = balance;
    this.currency = currency;
};

// replace with class Person with the appropriate constructor (firstName, lastName, accounts)
var person = (function () {
    var details = {
        firstName: 'John',
        lastName: 'example',
    };
    // replace with class method _calculateBalance()
    var calculateBalance = function () {
        var totalBalance = 0;

        // use 'of' operator instead
        for (var index = 0; index < this.accounts.length; index++) {
            totalBalance = totalBalance + this.accounts[index].balance;
        }

        return totalBalance;
    };

    return {
        firstName: details.firstName,
        lastName: details.lastName,
        accounts: [{
            balance: 1000.00,
            currency: 'EUR'
        }],
        // replace with class method addAccount(account)
        addAccount: function (account) {
            this.accounts.push(account);
        },
        // replace with class method sayHello()
        sayHello: function () {
            // use string interpolation here
            return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.accounts.length + ' bank account(s) with total balance ' + calculateBalance.apply(this);
        }
        // implement class method filterPositiveAccounts() which finds all accounts with a positive balance
    };
})();

// define new person with 'const' keyword, do some logging before / after adding accounts, print the result of filterPositiveAccounts() method 
console.log(person.sayHello());
person.addAccount(new Account(1500, 'EUR'));
console.log(person.sayHello());
