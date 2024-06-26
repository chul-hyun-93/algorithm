function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

test("case 1", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
});

test("case 2", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
});

test("case 3", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(true);
});
