const expect = require('expect');
const rewire = require('rewire');

//we use rewire like require
var app = rewire('./app');
describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('Andrew');
        expect(spy).toHaveBeenCalledWith('Andrew');
    });
    it('should call save user with user object',()=>{
        var email = 'andrew@example.com';
        var password ='123aabc';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    });
});