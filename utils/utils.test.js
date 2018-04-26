const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var results = utils.add(33, 11);
    expect(results).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
})

it('square a number', () => {
    var results = utils.square(3);
    expect(results).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    })
})

// it('should expect some values', () => {
//     //expect(12).toNotBe(12);
//     //expect({name: 'Jaini'}).toEqual({name: 'Jaini'});
//     //expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Jaini',
//         age: 30,
//         location: 'Las Pinas'
//     }).toExclude({
//         age: 23
//     })
// });

it('should verify first and last names are set', () => {
    var user = {
        age: 30,
        location: 'Las Pinas'
    };
    var fullName = 'Jaini Guevara';
    var res = utils.setName(user, fullName);

    expect(res)
        .toInclude({
            firstName: 'Jaini', 
            lastName: 'Guevara'
        })
        .toBeA('object');
});