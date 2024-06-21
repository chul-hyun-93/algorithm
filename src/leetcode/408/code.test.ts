function validWordAbbreviation(word: string, abbr: string): boolean {
  let i = 0;
  let j = 0;
  for(; i < abbr.length; i++) {
    if(j >= word.length) return false;

    if(abbr[i] === word[j]) {
      j++;
      continue;
    }

    if(abbr[i] === '0') return false;

    let num = '';
    while(i < abbr.length && !isNaN(Number(abbr[i]))) {
      num += abbr[i];
      i++;
    }
    i--;

    if(num === '') return false;

    j += Number(num);
  }

  return j === word.length;
}

test('case 1', () => {
  expect(validWordAbbreviation("internationalization","i12iz4n")).toStrictEqual(true);
});

test('case 2', () => {
  expect(validWordAbbreviation("apple", "a2e")).toStrictEqual(false);
});

