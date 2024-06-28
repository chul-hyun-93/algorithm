function fizzBuzz(n: number): string[] {
  if (n < 1) {
    return [];
  }
  return [...fizzBuzz(n - 1), answer(n)];
}

function answer(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
}

test("case 1", () => {
  expect(fizzBuzz(3)).toStrictEqual(["1", "2", "Fizz"]);
});

test("case 2", () => {
  expect(fizzBuzz(5)).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test("case 3", () => {
  expect(fizzBuzz(15)).toStrictEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
