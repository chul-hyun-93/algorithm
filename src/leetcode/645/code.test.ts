function findErrorNums(nums: number[]): number[] {
  const expectedNums = Array.from({ length: nums.length }).reduce<
    Record<number, boolean>
  >((acc, cur, index) => {
    acc[index + 1] = true;
    return acc;
  }, {});

  let duplicateNum = -1;
  for (let i = 0; i < nums.length; i++) {
    if (expectedNums[nums[i]]) {
      delete expectedNums[nums[i]];
    } else {
      duplicateNum = nums[i];
    }
  }

  const missingNum = Number(Object.keys(expectedNums)[0]);

  return [duplicateNum, missingNum];
}

test("case 1", () => {
  expect(findErrorNums([1, 2, 2, 4])).toStrictEqual([2, 3]);
});

test("case 2", () => {
  expect(findErrorNums([1, 1])).toStrictEqual([1, 2]);
});
