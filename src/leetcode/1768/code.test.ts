function mergeAlternately(word1: string, word2: string): string {
  const list1 = word1.split("");
  const list2 = word2.split("");

  const len = list1.length + list2.length;
  let result: string[] = [];
  for (let i = 0; i < len; i++) {
    const index = Math.floor(i / 2);
    if (i % 2 === 0) {
      const char = list1.shift();
      if (char === undefined) {
        result = result.concat(list2);
        break;
      } else {
        result.push(char);
      }
    } else {
      const char = list2.shift();
      if (char === undefined) {
        result = result.concat(list1);
        break;
      } else {
        result.push(char);
      }
    }
  }

  return result.join("");
}

test("case 1", () => {
  expect(mergeAlternately("abc", "pqr")).toStrictEqual("apbqcr");
});

test("case 2", () => {
  expect(mergeAlternately("ab", "pqrs")).toStrictEqual("apbqrs");
});

test("case 3", () => {
  expect(mergeAlternately("abcd", "pq")).toStrictEqual("apbqcd");
});

test("case 4", () => {
  expect(mergeAlternately("cf", "eee")).toStrictEqual("cefee");
});
