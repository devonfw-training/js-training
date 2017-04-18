'use strict';

console.log('hello from main js');

var Account = function (balance, currency) {
    this.balance = balance;
    this.currency = currency;
};

var person = (function () {
    var details = {
        firstName: 'John',
        lastName: 'example',
    };
    var calculateBalance = function () {
        var totalBalance = 0;

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
        addAccount: function (account) {
            this.accounts.push(account);
        },
        sayHello: function () {
            return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.accounts.length + ' bank account(s) with total balance ' + calculateBalance.apply(this);
        }
    };
})();

console.log(person.sayHello());
person.addAccount(new Account(1500, 'EUR'));
console.log(person.sayHello());
