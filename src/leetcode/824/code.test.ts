const VOWEL = ["a", "e", "i", "o", "u"];
const isVowel = (char: string) => VOWEL.includes(char);

function toGoatLatin(sentence: string): string {
  const words = sentence.split(" ");

  return words
    .map((word) => {
      if (isVowel(word[0])) return `${word}ma`;
      return `${word.slice(1)}${word.slice(0, 1)}ma`;
    })
    .map((word, index) => {
      return `${word}${"a".repeat(index + 1)}`;
    })
    .join(" ");
}

test.each([
  {
    input: "I speak Goat Latin",
    expected: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
  },
  {
    input: "The quick brown fox jumped over the lazy dog",
    expected:
      "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa",
  },
])("case %#", ({ input, expected }) => {
  expect(toGoatLatin(input)).toBe(expected);
});
