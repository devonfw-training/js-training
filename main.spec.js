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
        expect(person.firstName).toBe(firstName);
        expect(person.lastName).toBe(lastName);
        expect(person.accounts.length).toBe(1);
        expect(person.accounts[0].balance).toBe(1500);
        expect(person.accounts[0].currency).toBe('EUR');
        expect(person.accounts[0].number).toBe(1234);
    });

    it('should add account', () => {
        // given
        const account = new Account(200, 'EUR', 9999);

        // when
        person.addAccount(account);

        // then
        expect(person.accounts.length).toBe(2);
        expect(person.accounts[1]).toEqual(account);
    });

    it('should introduce itself', () => {
        // given when then
        expect(person.sayHello()).toBe('Hi, my name is John Example and I have 2 bank account(s) with total balance 1700');
    });

    it('should filter accounts with positive balance', () => {
        // given
        const account = new Account(-100, 'PLN', 1010);

        // when
        person.addAccount(account);
        const positiveAccounts = person.filterPositiveAccounts();

        // then
        expect(positiveAccounts.length = 2);
        expect(positiveAccounts[0].balance).toBeGreaterThanOrEqual(0);
        expect(positiveAccounts[1].balance).toBeGreaterThanOrEqual(0);
    });

    it('should find account by its number', () => {
        // given
        const accountNumber = 1234;

        // when
        const foundAccount = person.findAccount(accountNumber);

        // then
        expect(foundAccount.number).toBe(accountNumber);
    });

    it('should withdraw money', (done) => {
        // given when
        const promise = person.withdraw(1234, 200);
        
        // then
        promise.then(() => {
            expect(person.accounts[0].balance).toBe(1300);
            done();
        });
    });

    it('should not withdraw money when account not found', (done) => {
        // given when
        const promise = person.withdraw(5, 2000);

        // then
        promise.catch((reason) => {
            expect(reason).toBe('Incorrect account number');
            done();
        });
    });

    it('should not withdraw money when there is not enough money on the account', (done) => {
        // given when
        const promise = person.withdraw(1234, 20000);

        // then
        promise.catch((reason) => {
            expect(reason).toBe('Not enough funds on account number 1234');
            done();
        });
    });
});