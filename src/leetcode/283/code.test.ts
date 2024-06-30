/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      [nums[lastNonZeroFoundAt], nums[cur]] = [
        nums[cur],
        nums[lastNonZeroFoundAt],
      ];
      lastNonZeroFoundAt++;
    }
  }
}

test("case 1", () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1, 3, 12, 0, 0]);
});

test("case 2", () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toStrictEqual([0]);
});
