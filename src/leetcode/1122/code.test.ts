function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const arr2Map = new Map(arr2.map((val, index) => [val, index]));
  const result = [...arr1];

  result.sort((a, b) => {
    const aIndex = arr2Map.get(a);
    const bIndex = arr2Map.get(b);
    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex - bIndex;
    }
    if (aIndex !== undefined) {
      return -1;
    }
    if (bIndex !== undefined) {
      return 1;
    }
    return a - b;
  });

  return result;
}

test("case 1", () => {
  const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
  const arr2 = [2, 1, 4, 3, 9, 6];
  const output = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
  expect(relativeSortArray(arr1, arr2)).toEqual(output);
});

test("case 2", () => {
  const arr1 = [28, 6, 22, 8, 44, 17];
  const arr2 = [22, 28, 8, 6];
  const output = [22, 28, 8, 6, 17, 44];
  expect(relativeSortArray(arr1, arr2)).toEqual(output);
});
