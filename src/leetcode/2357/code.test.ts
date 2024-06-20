function minimumOperations(nums: number[]): number {
  return new Set(nums.filter(num => num !== 0)).size;
}

function minimumOperationsOld(nums: number[]): number {
  let count = 0;

  while (nums.some(n => n > 0)) {
    count++;
    const min = Math.min(...nums.filter(n => n > 0));
    nums = nums.map(val => val - min);
  }

  return count;
}

test('case 1', () => {
  const input = [1,5,0,3,5]
  const expected = 3

  expect(minimumOperations(input)).toBe(expected);
});

test('case 2', () => {
  const input = [0]
  const expected = 0

  expect(minimumOperations(input)).toBe(expected);
});

