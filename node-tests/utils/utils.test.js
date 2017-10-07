const utils = require('./utils');
const expect = require('expect');

it('Should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('Should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
});

it('Should square a number', () => {
    let res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
});

it('Should async square two numbers', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    });
});

it('Should verify first and last names are set', () => {
  var user = {
    location: 'birmingham',
    age: 32
  };

  let res = utils.setName(user, 'Andrew Nixon');

  expect(res).toEqual(user).toInclude({
    firstName: 'Andrew',
    lastName: 'Nixon'
  });
});
