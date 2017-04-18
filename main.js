console.log('hello from main js');

// add acount number
class Account {
    constructor(balance, currency) {
        this.balance = balance;
        this.currency = currency;
    };
};

class Person {
    constructor(firstName, lastName, accounts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = accounts;
    };

    addAccount(account) {
        this.accounts.push(account);
    };

    sayHello() {
        return `Hi, my name is ${this.firstName} ${this.lastName} and I have ${this.accounts.length} bank account(s) with total balance ${this._calculateBalance()}`;
    };

    filterPositiveAccounts() {
        return this.accounts.filter(account => account.balance > 0);
    };

    // add findAccount(accountNumber) method (use Array.find method)

    // add withdraw(accountNumber, amount) method which returns promise (use Promise API -> new Promise(resolve, reject))
    // promise is resolved after 3 seconds (use setTimeout(callback)) when the account is found and the amount >= account.balance
    // promise is rejected either when account is not found or there are not enough funds on the found account

    _calculateBalance() {
        let totalBalance = 0;

        for (let account of this.accounts) {
            totalBalance = totalBalance + account.balance;
        }

        return totalBalance;
    };
};

// add account numbers to all Account constructors
const person = new Person('John', 'Example', [new Account(1500, 'EUR')]);
console.log(person.sayHello());
person.addAccount(new Account(-2500, 'EUR'));
console.log(person.sayHello());
console.log(person.filterPositiveAccounts());

// call person.withdraw for different cases

