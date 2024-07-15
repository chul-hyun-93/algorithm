function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, string>();
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];

    if (map.has(c1)) {
      if (map.get(c1) !== c2) {
        return false;
      }
    } else if (set.has(c2)) {
      return false;
    } else {
      map.set(c1, c2);
      set.add(c2);
    }
  }

  return true;
}

test("case 1", () => {
  expect(isIsomorphic("egg", "add")).toBe(true);
});

test("case 2", () => {
  expect(isIsomorphic("foo", "bar")).toBe(false);
});

test("case 3", () => {
  expect(isIsomorphic("paper", "title")).toBe(true);
});

test("case 4", () => {
  expect(isIsomorphic("badc", "baba")).toBe(false);
});
