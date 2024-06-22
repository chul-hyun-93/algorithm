function maxProfit(prices: number[]): number {
  let min;
  let result = 0;
  for(let i = 0; i < prices.length; i++){
    if(min === undefined || prices[i] < min){
      min = prices[i];
    }else if(result === undefined || prices[i] - min > result){
      result = prices[i] - min;
    }
  }

  return result;
};

test('case 1', () => {
  expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5);
});

test('case 2', () => {
  expect(maxProfit([7,6,4,3,1])).toStrictEqual(0);
});

