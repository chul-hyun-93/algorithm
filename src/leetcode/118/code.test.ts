function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const prevRow = result?.[i - 1] ?? [];
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = prevRow[j - 1] + prevRow[j];
      }
    }
    result.push(row);
  }

  return result;
}

test("case 1", () => {
  expect(generate(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});

test("case 2", () => {
  expect(generate(1)).toStrictEqual([[1]]);
});
