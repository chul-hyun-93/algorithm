function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for(let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if(map.has(diff)){
      return [i, map.get(diff)];
    }
    map.set(nums[i], i);
  }

  return [];
}

function twoSumOld(nums: number[], target: number): number[] {
  // nums 를 해시맵에 넣는다 (O(n)) 값을 키값으로 인덱스를 값으로 넣는다
  // nums 를 순회하면서 target - nums[i] 가 해시맵에 있는지 확인한다 (O(n))
  // 있으면 해당 인덱스와 i 를 리턴한다

  const map = new Map();
  nums.forEach((num, index) => {
    map.set(num, index);
  });

  for(let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if(map.has(diff) && map.get(diff) !== i){
      return [i, map.get(diff)];
    }
  }

  return [];
};

test('case 1', () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1]);
});

test('case 2', () => {
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});

test('case 3', () => {
  expect(twoSum([1,3,3], 6)).toStrictEqual([1,2]);
});
