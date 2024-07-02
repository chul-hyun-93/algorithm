function commonChars(words: string[]): string[] {
  const wordList = words.map((word) => word.split(""));
  let common = wordList[0].reduce<Record<string, number>>((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  for (let i = 1; i < wordList.length; i++) {
    const newCommon: Record<string, number> = {}; // 공통되지 않은 숫자에서 제거하는 방식으로 변경해보기 (숫자가 낮아지게)
    const word = wordList[i];
    for (const char of word) {
      if (common[char] === undefined) continue;
      if (newCommon?.[char] === undefined || newCommon[char] < common[char]) {
        newCommon[char] = (newCommon[char] ?? 0) + 1;
      }
    }

    common = newCommon;
  }

  return Object.entries(common).reduce<string[]>((acc, [char, count]) => {
    acc.push(...Array(count).fill(char));
    return acc;
  }, []);
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
