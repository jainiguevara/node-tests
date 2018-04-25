const utils = require('./utils');

it('should add two numbers', () => {
    var results = utils.add(33, 11);
    if (results !== 44) {
        throw new Error(`Expected 44, but got ${results}`);
    }
});

it('square a number', () => {
    var results = utils.square(3);
    if (results !== 9) {
        throw new Error(`Expected ${expected}, but got ${results}`);
    }
});