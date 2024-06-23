/**
if(n===2) return 2;
if(n===3) return 3;
[1,1,1,1] = 1* 1* 1*1
  [1,1,2]
  [1,2,1]
  [2,1,1]
  [2,2]

9 의 경우

2 로 나눈고 나온 값 => 4
나머지 => 1

n = 4+1
r = 4

2를 1개씩 줄이면서 나머지를 2씩 올린다.
  [4,1]
  [3,3]
  [2,5]
  [1,7]
  [0,9]

  [1,1,1,1,1] = 1
  [1,1,1,2] = 4
  [1,2,2] = (3*2) /2

  [1,1,1,2,2,2] = (6*5*4*3*2*1) / (3*2*1)(3*2*1)
*/

function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const list: Array<[number, number]> = [];
  const val = Math.floor(n / 2);
  const rem = n % 2

  // console.log('val, rem', n, val, rem);

  for (let i = 0; i <= val; i++) {
    // console.log('for', i, val, val - i, rem + 2 * i);
    list.push([val - i, rem + 2 * i])
  }

  // console.log('list', list);

  return list.reduce((result, item) => {
    return result + combination(item[0] + item[1], item[0]);
  }, 0);
}

function combination(n:number ,r:number) {
  if(r === 0) return 1;
  // console.log('combination', n, r)
  const result = factorial(n) / (factorial(r) * factorial(n-r));
  // console.log('combination result', n, r, result);
  return result;
}

function factorial(n:number):number {
  if(n === 0) return 1;
  if(n === 1) return 1;
  return n * factorial(n - 1);
}

test('case 1', () => {
  expect(climbStairs(2)).toStrictEqual(2);
});

test('case 2', () => {
  expect(climbStairs(3)).toStrictEqual(3);
});

test('case 3', () => {
  expect(climbStairs(4)).toStrictEqual(3);
});
