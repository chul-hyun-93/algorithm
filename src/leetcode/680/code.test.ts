function validPalindrome(s: string): boolean {
  const list = s.split('');
  for(let [i, j] = [0, list.length - 1] ; i < j ; i++, j--) {
    if(list[i] !== list[j]) {
      const str1 = [...list.slice(0, i), ...list.slice(i+1)].join('')
      const str2 = [...list.slice(0, j), ...list.slice(j+1)].join('')

      return str1 === str1.split('').reverse().join('') ||
        str2 === str2.split('').reverse().join('');
    }
  }

  return true;
}

test('case 1', () => {
  expect(validPalindrome("aba")).toStrictEqual(true);
});

test('case 2', () => {
  expect(validPalindrome("abca")).toStrictEqual(true);
});

test('case 3', () => {
  expect(validPalindrome("abc")).toStrictEqual(false);
});

test('case 4', () => {
  expect(validPalindrome("ebcbbececabbacecbbcbe")).toStrictEqual(true);
});
