const VOWEL = ["a", "e", "i", "o", "u"];
const isVowel = (char: string) => VOWEL.includes(char.toLowerCase());

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

test('case 1', () => {
  const input = "I speak Goat Latin";
  const expected = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa";

  expect(toGoatLatin(input)).toBe(expected);
});

test('case 2', () => {
  const input = "The quick brown fox jumped over the lazy dog";
  const expected = "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa";

  expect(toGoatLatin(input)).toBe(expected);
});

test('case 3', () => {
  const input = "Each word consists of lowercase and uppercase letters only"
  const expected = "Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa"

  expect(toGoatLatin(input)).toBe(expected);
});
