function isValid(s: string): boolean {
  const stack: string[] = [];
  const list = s.split('');
  for(let i = 0 ; i < list.length ; i++) {
    if(list[i] === ')') {
      const item = stack.pop();
      if(item !== '(') return false
      continue;
    }else if(list[i] === '}') {
      const item = stack.pop();
      if(item !== '{') return false
      continue;
    }else if(list[i] === ']') {
      const item = stack.pop();
      if(item !== '[') return false
      continue;
    }
    stack.push(list[i]);
  }

  return stack.length === 0
}

test('case 1', () => {
  expect(isValid("()")).toStrictEqual(true);
});

test('case 2', () => {
  expect(isValid("()[]{}")).toStrictEqual(true);
});

test('case 3', () => {
  expect(isValid("(]")).toStrictEqual(false);
});
