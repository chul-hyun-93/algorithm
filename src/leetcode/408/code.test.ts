function validWordAbbreviation(word: string, abbr: string): boolean {
  let abbrIndex = 0;
  let wordIndex = 0;
  for (; abbrIndex < abbr.length; abbrIndex++) {
    if (wordIndex >= word.length) return false;

    if (!isNumber(abbr[abbrIndex])) {
      if (abbr[abbrIndex] !== word[wordIndex]) return false;
      wordIndex++;
      continue;
    }

    if (abbr[abbrIndex] === "0") return false;

    const num = (() => {
      let result = "";
      while (abbrIndex < abbr.length && isNumber(abbr[abbrIndex])) {
        result += abbr[abbrIndex];
        abbrIndex++;
      }
      abbrIndex--;
      return result;
    })();

    wordIndex += Number(num);
  }

  return wordIndex === word.length;
}

const isNumber = (str: string): boolean => {
  return !Number.isNaN(Number(str));
};

test("case 1", () => {
  expect(
    validWordAbbreviation("internationalization", "i12iz4n"),
  ).toStrictEqual(true);
});

test("case 2", () => {
  expect(validWordAbbreviation("apple", "a2e")).toStrictEqual(false);
});
