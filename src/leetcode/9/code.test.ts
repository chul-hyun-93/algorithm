function isPalindrome(x: number): boolean {
  return x >= 0 && x === parseInt(`${x}`.split('').reverse().join(''))
}

test('case 1', () => {
  expect(isPalindrome(121)).toStrictEqual(true);
});

test('case 2', () => {
  expect(isPalindrome(-121)).toStrictEqual(false);
});

test('case 3', () => {
  expect(isPalindrome(10)).toStrictEqual(false);
});
