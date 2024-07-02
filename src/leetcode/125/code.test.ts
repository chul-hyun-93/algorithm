function isPalindrome(s: string): boolean {
  const text = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  return text === text.split("").reverse().join("");
}

test("case 1", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toStrictEqual(true);
});

test("case 2", () => {
  expect(isPalindrome("race a car")).toStrictEqual(false);
});

test("case 3", () => {
  expect(isPalindrome(" ")).toStrictEqual(true);
});
