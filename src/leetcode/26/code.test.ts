function removeDuplicates(nums: number[]): number {
  const set = new Set<number>();
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
    set.add(nums[i]);
  }

  return writeIndex;
}
