const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Jaini', 30);
        expect(spy).toHaveBeenCalledWith('Jaini', 30);
    })

    it('should call saveUser with user object', () => {
        var email = 'jaini@example.com';
        var password = 'abc123';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
})