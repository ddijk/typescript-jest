const greeter_mod = require('./greeter')

test('Test calling function from module', () => {

  expect(greeter_mod.greeter('dick')).toBe('Hello, dick');
});
