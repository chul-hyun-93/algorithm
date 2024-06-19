function findChampionOld(grid: number[][]): number {
  const max = grid.length;
  let i = 0;
  let j = 0;

  for(; i <= max ; i++){
    for(; j <= max ; j++){
      if(i===j) continue;
      if(grid[i][j] === 0) break;
      if(j === max) return i;
    }
  }

  return i;
}

function findChampion(grid: number[][]): number {
  const max = grid.length;
  let winner = 0;

  for(let opponent = 0; opponent <= max ; opponent++){
    if(opponent === winner) continue;

    if(grid[winner][opponent] === 0) {
      winner = opponent
    }
  }

  return winner;
}

test('case 1', () => {
  const input = [[0, 1], [0, 0]]
  const expected = 0

  expect(findChampion(input)).toBe(expected);
});

test('case 2', () => {
  const input = [[0, 0, 1], [1, 0, 1], [0, 0, 0]]
  const expected = 1

  expect(findChampion(input)).toBe(expected);
});
