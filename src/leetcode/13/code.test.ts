const KEYS = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'I', 'V', 'X', 'L', 'C', 'D', 'M'] as const;
const MAP:Record<typeof KEYS[number], number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900,
}

function romanToInt(s: string): number {
  KEYS.forEach((key) => {
    s = s.replace(new RegExp(key, 'g'), `${MAP[key]} `);
  })
  const list = s.split(' ');
  list.pop();

  console.log(list);

  return list.reduce((acc, cur) => {
    const num = parseInt(cur);
    return acc + num;
  }, 0);
}

test('case 1', () => {
  expect(romanToInt("III")).toStrictEqual(3);
});

test('case 2', () => {
  expect(romanToInt("LVIII")).toStrictEqual(58);
});

test('case 3', () => {
  expect(romanToInt("MCMXCIV")).toStrictEqual(1994);
});
