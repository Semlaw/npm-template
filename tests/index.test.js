import { product, add } from '../src';

test('should 2 * 5 = 10', () => {
  expect(product(2, 5)).toBe(10);
});


test('should 2 + 5 = 7', () => {
  expect(add(2, 5)).toBe(7);
});
