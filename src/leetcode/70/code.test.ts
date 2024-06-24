function climbStairs(n: number): number {
  if(n === 1) return 1;
  let first = 1;
  let second = 2;
  for(let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}

test('case 1', () => {
  expect(climbStairs(2)).toStrictEqual(2);
});

test('case 2', () => {
  expect(climbStairs(3)).toStrictEqual(3);
});

test('case 3', () => {
  expect(climbStairs(4)).toStrictEqual(5);
});
