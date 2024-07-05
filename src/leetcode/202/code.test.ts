function isHappy(n: number): boolean {
  const seen = new Set<number>();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur) ** 2, 0);
  }

  return n === 1;
}

test("case 1", () => {
  expect(isHappy(19)).toBe(true);
});

test("case 2", () => {
  expect(isHappy(2)).toBe(false);
});
