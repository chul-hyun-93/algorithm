function majorityElement(nums: number[]): number {
  // 풀지 못하였음. 비트로 분석하는 방식과 Boyer-Moore Voting Algorithm 방식이 있음
  // Boyer-Moore Voting Algorithm 코드를 작성하겠습니다.
  let count = 0;
  let candidate: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += candidate === nums[i] ? 1 : -1;
  }

  return candidate as number;
}

test("case 1", () => {
  expect(majorityElement([3, 2, 3])).toStrictEqual(3);
});

test("case 2", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toStrictEqual(2);
});
