function longestCommonPrefix(strs: string[]): string {
  for(let i = 0 ; i <= 199 ; i++){
    if(!strs.every(str => strs[0].charAt(i) === str.charAt(i))) {
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
}

test('case 1', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toStrictEqual("fl");
});

test('case 2', () => {
  expect(longestCommonPrefix(["dog","racecar","car"])).toStrictEqual("");
});

test('case 3', () => {
  expect(longestCommonPrefix(["a"])).toStrictEqual("a");
});
