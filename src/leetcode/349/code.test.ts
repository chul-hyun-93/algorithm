function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set<number>();
  const result = new Set<number>();

  for (const num of nums1) {
    nums1Set.add(num);
  }

  for (const num of nums2) {
    if (nums1Set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}

test("case 1", () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2]);
});

test("case 2", () => {
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([9, 4]);
});
