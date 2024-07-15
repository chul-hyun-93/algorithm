function firstUniqChar(s: string): number {
  const count = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (count.has(c)) {
      count.set(c, count.get(c)! + 1);
    } else {
      count.set(c, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

test("case 1", () => {
  expect(firstUniqChar("leetcode")).toBe(0);
});

test("case 2", () => {
  expect(firstUniqChar("loveleetcode")).toBe(2);
});

test("case 3", () => {
  expect(firstUniqChar("aabb")).toBe(-1);
});
