function commonChars(words: string[]): string[] {
  let target = words[0].split("");
  for (let i = 1; i < words.length; i++) {
    target = commonChars2(target, words[i].split(""));
  }
  return target;
}

function commonChars2(word1: string[], word2: string[]): string[] {
  return word1.filter((char) => {
    const index = word2.indexOf(char);
    if (index < 0) return false;
    // eslint-disable-next-line no-param-reassign
    word2 = [...word2.slice(0, index), ...word2.slice(index + 1)];
    return true;
  });
}

test("case 1", () => {
  expect(commonChars(["bella", "label", "roller"])).toStrictEqual([
    "e",
    "l",
    "l",
  ]);
});

test("case 2", () => {
  expect(commonChars(["cool", "lock", "cook"])).toStrictEqual(["c", "o"]);
});
