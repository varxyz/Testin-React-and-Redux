import sum from '../sum';

test('it works', () => {
  const result = sum(1,2);
  expect(result).toBe(3);
})

//skips the test
test.skip('it works', () => {
  const result = sum(1,2);
  expect(result).toBe(3);
})

//runs just this test
test.only('it works', () => {
  const result = sum(1,2);
  expect(result).toBe(3);
})
