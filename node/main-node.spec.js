const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const Person = require('./person.js');
const Account = require('./account.js');


describe('Person class tests', () => {

    let person;
    const firstName = 'John';
    const lastName = 'Example';
    const accounts = [new Account(1500, 'EUR', 1234)];


    beforeEach(() => {
        person = new Person(firstName, lastName, accounts);
    });

    it('should initialize new person object', () => {
        // given when then
        expect(person.firstName).to.equal(firstName);
        expect(person.lastName).to.equal(lastName);
        expect(person.accounts.length).to.equal(1);
        expect(person.accounts[0].balance).to.equal(1500);
        expect(person.accounts[0].currency).to.equal('EUR');
        expect(person.accounts[0].number).to.equal(1234);
    });
});