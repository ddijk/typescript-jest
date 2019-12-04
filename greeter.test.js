const greeter_mod = require('./greeter')

test('Test calling function from module', () => {
  expect(greeter_mod.greeter('dick')).toBe('Hello, dick');
});

test('Test conversion from array to dictionary', () => {
  const input = [{ id : "1", name: "dick"}, { id : "2", name: "lieve"}];

  const output = greeter_mod.arrayToDict(input);
  expect(output["1"]).toEqual({id:"1", name:"dick"});
  expect(output["2"]).toEqual({id:"2", name:"lieve"});
});
